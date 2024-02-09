import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '@app/interfaces/factivar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-articulo-factura',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    FormsModule,
    DialogModule,
    TableModule,
    ToastModule,
    ButtonModule,
  ],
  templateUrl: './articulo-factura.component.html',
  styleUrl: './articulo-factura.component.css',
})
export class ArticuloFacturaComponent {
  @Input() public articles: IProduct[] = [];
  @Output() public pacos = new EventEmitter<number>();
  @Output() public articulos = new EventEmitter<IProduct>();
  public article: IProduct = {
    pUnitario: 0,
    unidades: 0,
    bImponible: 0,
    cuotaIva: 0,
    descripcion: '',
    importe: 0,
    iva: 0,
  };
  public cantidad = '';

  public calculaImporte() {
    this.article.importe = this.article.unidades * this.article.pUnitario;
  }

  public emiteArticle() {
    this.articulos.emit({ ...this.article });
    this.article.unidades = 0;
    this.article.descripcion = '';
    this.article.pUnitario = 0;
    this.article.importe = 0;
    this.article.iva = 0;
  }

  public removeArticle(art: number) {
    this.pacos.emit(art);
  }
}
