import { Routes } from '@angular/router';

const clientesRoutes: Routes = [
  {
    path: '',
    title: 'Clientes | Factivar',
    loadComponent: () =>
      import('../pages/clientes/clientes.component').then(
        (c) => c.ClientesComponent
      ),
  },
  {
    path: ':id',
    title: 'Detalles del Cliente | Factivar',
    loadComponent: () =>
      import('../pages/detail-customer/detail-customer.component').then(
        (c) => c.DetailCustomerComponent
      ),
  },
];

export default clientesRoutes;
