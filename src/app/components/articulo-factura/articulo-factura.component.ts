import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { calculateImporteIva } from '@app/helpers/facturas.helper';
import { IProduct } from '@app/interfaces/factivar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

/**
 * Componente para mostrar un artículo de una factura.
 */
@Component({
  selector: 'app-articulo-factura',
  standalone: true,
  imports: [FormsModule, DatePipe,
    FormsModule,
    DialogModule,
    TableModule,
    ToastModule,
    ButtonModule],
  templateUrl: './articulo-factura.component.html',
  styleUrl: './articulo-factura.component.css',
})
export class ArticuloFacturaComponent {

  article : IProduct = {
    pUnitario : 0,
    unidades : 0,
    bImponible : 0,
    cuotaIva : 0,
    descripcion : "",
    importe : 0,
    iva : 0
  };

 articles : IProduct[] = [];
 cantidad = "";


  calculaImporte(){
    this.article.importe = this.article.unidades * this.article.pUnitario;
  }
  /**
   * Evento que se emite cuando se desea eliminar el artículo.
   */
  @Output() pacos = new EventEmitter<number>();
  @Output() articulos = new EventEmitter<IProduct>();

  emiteArticle(){
    this.articulos.emit({...this.article});
    this.articles.push({...this.article});
    this.article.unidades = 0;
    this.article.descripcion = "";
    this.article.pUnitario = 0;
    this.article.importe = 0;
    this.article.iva = 0;
  }
  /**
   * Método para eliminar el artículo.
   */
  // removeArticle(art: IProduct) {
  //   this.pacos.emit(art);
  //   this.articles = this.articles.filter(p => p !== art);
  // }

  removeArticle(art: number) {
    this.pacos.emit(art);
    this.articles.splice(art,1);
  }
}
