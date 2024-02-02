import { AsyncPipe, CurrencyPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BtnGrowComponent } from '@app/components/btn-grow/btn-grow.component';
import { FactivarBrandComponent } from '@app/components/factivar-brand/factivar-brand.component';
import { pdfHelper } from '@app/helpers/pdf.helper';
import { IInvoice } from '@app/interfaces/factivar';
import { getDataByPk } from '@app/services/data.service';

/**
 * Componente para la plantilla de la factura.
 */
@Component({
  selector: 'app-invoice-template',
  standalone: true,
  imports: [NgIf, AsyncPipe, JsonPipe, CurrencyPipe, FactivarBrandComponent, BtnGrowComponent],
  templateUrl: './invoice-template.component.html',
  styleUrl: './invoice-template.component.css',
})
export class InvoiceTemplateComponent implements OnInit {
  /**
   * Observable que contiene los datos de la factura.
   */
  invoice$ = getDataByPk<IInvoice>('facturas');

  /**
   * Configuración para la generación del PDF.
   */
  pdfConfig = {
    filename: '',
  };

  /**
   * Función para descargar el PDF.
   */
  downloadPDF = pdfHelper;

  /**
   * Método que se ejecuta al inicializar el componente.
   */
  ngOnInit(): void {
    this.getPk();
  }

  /**
   * Obtiene la clave primaria de la factura y actualiza la configuración del PDF.
   */
  getPk() {
    this.invoice$.subscribe({
      next: (data) =>
        (this.pdfConfig.filename = `factivar_${data.numeroFactura}_${data.fechaExpedicion}.pdf`),
      error: (err) => console.error(err),
    });
  }
}
