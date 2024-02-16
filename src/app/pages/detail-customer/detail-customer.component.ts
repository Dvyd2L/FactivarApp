/**
 * Componente para mostrar los detalles de un cliente.
 */
import {
  AsyncPipe,
  DatePipe,
  JsonPipe,
  CurrencyPipe,
  NgIf,
} from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderComponent } from '@app/components/loader/loader.component';
import { ICustomer, IInvoice } from '@app/interfaces/factivar';
import { getDataByPk } from '@app/services/data.service';
import { find } from 'rxjs';

@Component({
  selector: 'app-detail-client',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, NgIf, CurrencyPipe, DatePipe, LoaderComponent, FormsModule],
  templateUrl: './detail-customer.component.html',
  styleUrl: './detail-customer.component.css',
  providers: [Router],
})
export class DetailCustomerComponent implements OnInit{
  
  public numeroFactuP = 0;
  public numeroFactuC = 0;
  // private fact: IInvoice;
  private router = inject(Router);
  /**
   * Observable que contiene los datos del cliente.
   */
  public customer$ = getDataByPk<ICustomer>('clientes');
  public facturasProv: IInvoice[] | undefined = [];
  public facturasCli: IInvoice[] | undefined = [];
  public facturasProv2: IInvoice[] | undefined = [];
  public facturasCli2: IInvoice[] | undefined = [];
  public verFactura = (pk: number) =>
    this.router.navigate(['facturas', 'detail', pk]);

ngOnInit(): void {
    this.customer$.subscribe({
      next:(data) => {
        this.facturasProv = data.facturaProveedors;
        this.facturasCli = data.facturaClientes;
      },
      error:(error) => {console.error(error)},
    });
    this.facturasCli2 = this.facturasCli;
    this.facturasProv2 = this.facturasProv;
    console.log(this.numeroFactuP);
  }

  //magia = (ev:Event) => (ev.target as HTMLInputElement).value;
  public buscarFacturaProv(ev:Event){
    console.log(this.numeroFactuP);
    console.log(ev);
    const magia = String(ev);
    this.facturasProv2 = this.facturasProv?.filter(f => f.numeroFactura.toString().includes(magia));
    //this.facturasProv = this.fact;
  }

  public buscarFacturaCli(ev:Event){
    const magia = String(ev);
    this.facturasCli2 = this.facturasCli?.filter(f => f.numeroFactura.toString().includes(magia));
    //this.facturasProv = this.fact;
  }
}
