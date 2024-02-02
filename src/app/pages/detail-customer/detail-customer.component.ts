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
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderComponent } from '@app/components/loader/loader.component';
import { ICustomer } from '@app/interfaces/factivar';
import { getDataByPk } from '@app/services/data.service';

@Component({
  selector: 'app-detail-client',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, NgIf, CurrencyPipe, DatePipe, LoaderComponent],
  templateUrl: './detail-customer.component.html',
  styleUrl: './detail-customer.component.css',
  providers: [Router],
})
export class DetailCustomerComponent {
  private router = inject(Router);
  /**
   * Observable que contiene los datos del cliente.
   */
  public customer$ = getDataByPk<ICustomer>('clientes');
  public verFactura = (pk: number) =>
    this.router.navigate(['facturas', 'detail', pk]);
}
