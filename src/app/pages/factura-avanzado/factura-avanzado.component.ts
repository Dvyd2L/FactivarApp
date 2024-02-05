import { Component, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { ArticuloFacturaComponent } from '../../components/articulo-factura/articulo-factura.component';
import { calculateImportes } from '@app/helpers/facturas.helper';
import { IProduct } from '@app/interfaces/factivar';
import { IFacturaNueva } from '@app/interfaces/factura.interface';
import { FormsModule } from '@angular/forms';
import { FacturasService } from '@app/services/facturas.service';
import { ToastModule } from 'primeng/toast';
import { HttpErrorResponse } from '@angular/common/http';
import { addMessage } from '@app/helpers/message.helper';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-factura-avanzado',
  standalone: true,
  imports: [ArticuloFacturaComponent, FormsModule, ToastModule],
  templateUrl: './factura-avanzado.component.html',
  styleUrl: './factura-avanzado.component.css',
  providers: [MessageService, FacturasService],
})
export class FacturaAvanzadoComponent {
  /**
   * Referencia al contenedor de vista del componente ArticuloFactura.
   */
  @ViewChild('articuloFactura', { read: ViewContainerRef })
  private facturasService = inject(FacturasService);
  private messageService = inject(MessageService);
  private errorMessage = addMessage;
  public nuevaFactu: IFacturaNueva = {
    numeroFactura: 0,
    pendientePago: false,
    descripcionOperacion: '',
    fechaExpedicion: '',
    fechaCobro: '',
    clienteId: '',
    proveedorId: '',
    articulos: [],
  };
  public listaArticulos: IProduct[] = [];
  public fecha = new Date().toISOString().split('T')[0];
  public fechaCobro = new Date().toISOString().split('T')[0];
  public fechaCorrecta = false; // false = pendiente de pago      true = no pendiente de pago
  public articuloFactura!: ViewContainerRef;
  public ricias = {
    subTotal: 0,
    importeTotal: 0,
  };

  public addArticulo(item: IProduct) {
    this.listaArticulos.push(item);
    this.ricias = calculateImportes(this.listaArticulos);
  }

  public comprobarFecha() {
    this.fechaCorrecta = this.fechaCobro >= this.fecha;
  }

  public removeArticle(item: number) {
    this.listaArticulos.splice(item, 1);
    this.ricias = calculateImportes(this.listaArticulos);
  }

  public crearFactura() {
    this.nuevaFactu.pendientePago = !this.fechaCorrecta;
    this.nuevaFactu.fechaExpedicion = this.fecha;
    this.nuevaFactu.fechaCobro = this.fechaCobro;
    this.nuevaFactu.articulos = this.listaArticulos;

    this.facturasService.addFactura(this.nuevaFactu).subscribe({
      next: (data) =>
        this.messageService.add({
          severity: 'success',
          summary: 'Registro Creado',
          detail: 'Factura creada con éxito',
        }),
      error: (err) => {
        console.error({ err });
        if (err instanceof HttpErrorResponse) {
          this.errorMessage(err, this.messageService);
        }
      },
    });

    this.nuevaFactu = {
      numeroFactura: 0,
      pendientePago: false,
      descripcionOperacion: '',
      fechaExpedicion: '',
      fechaCobro: '',
      clienteId: '',
      proveedorId: '',
      articulos: [],
    };

    this.listaArticulos = [];
  }
}
