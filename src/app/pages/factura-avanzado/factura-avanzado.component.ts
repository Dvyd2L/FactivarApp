/**
 * Componente para la página de factura avanzada.
 */
import { Component, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { ArticuloFacturaComponent } from '../../components/articulo-factura/articulo-factura.component';
import { calculateImportes } from '@app/helpers/facturas.helper';
import { IProduct } from '@app/interfaces/factivar';
import { IFacturaNueva } from '@app/interfaces/factura.interface';
import { DateTimeProvider } from 'angular-oauth2-oidc';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FacturasService } from '@app/services/facturas.service';

@Component({
  selector: 'app-factura-avanzado',
  standalone: true,
  imports: [ArticuloFacturaComponent, FormsModule],
  templateUrl: './factura-avanzado.component.html',
  styleUrl: './factura-avanzado.component.css',
})
export class FacturaAvanzadoComponent {
  nuevaFactu: IFacturaNueva = {
    numeroFactura : 0,
    pendientePago:false,
    descripcionOperacion:"",
    fechaExpedicion:"",
    fechaCobro:"",
    clienteId:"",
    proveedorId:"",
    articulos: [],
    };
  listaArticulos: IProduct[] = [];
  fecha = new Date().toISOString().split('T')[0];
  fechaCobro = new Date().toISOString().split('T')[0];
  fechaCorrecta = false; // false = pendiente de pago      true = no pendiente de pago

  private facturasService = inject(FacturasService);
  /**
   * Referencia al contenedor de vista del componente ArticuloFactura.
   */
  @ViewChild('articuloFactura', { read: ViewContainerRef })
  articuloFactura!: ViewContainerRef;

  ricias = {
    subTotal: 0,
    importeTotal: 0,
  };
  /**
   * Agrega un artículo al componente ArticuloFactura.
   */
  // addArticle() {
  //   this.articuloFactura.createComponent(ArticuloFacturaComponent);
  // }

  addArticulo(item: IProduct) {
    this.listaArticulos.push(item);
    this.ricias = calculateImportes(this.listaArticulos);
  }

  comprobarFecha() {
    console.log(this.fecha);
    console.log(this.fechaCobro);

    console.log(this.fechaCobro >= this.fecha);
    this.fechaCorrecta = this.fechaCobro >= this.fecha;
  }
  /**
   * Elimina el artículo del componente ArticuloFactura.
   */
  // removeArticle(item: IProduct) {
  //   console.log(this.listaArticulos);
  //   this.listaArticulos = this.listaArticulos.filter(p => {
  //     console.log(p.descripcion !== item.descripcion);
  //     return p.descripcion !== item.descripcion;
  //   });
  //   console.log(this.listaArticulos);
  //   this.ricias = calculateImportes(this.listaArticulos);
  // }

  removeArticle(item: number) {
    this.listaArticulos.splice(item, 1);
    this.ricias = calculateImportes(this.listaArticulos);
  }

  crearFactura() {
    this.nuevaFactu.pendientePago = !this.fechaCorrecta;
    this.nuevaFactu.fechaExpedicion = this.fecha;
    this.nuevaFactu.fechaCobro = this.fechaCobro;
    this.nuevaFactu.articulos = this.listaArticulos;

    this.facturasService.addFactura(this.nuevaFactu).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.error(err),
    })
  }
}
