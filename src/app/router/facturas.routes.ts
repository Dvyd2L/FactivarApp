import { Routes } from '@angular/router';

const facturasRoutes: Routes = [
  {
    path: '',
    title: 'Facturas | Factivar',
    loadComponent: () =>
      import('../pages/factura-avanzado/factura-avanzado.component').then(
        (c) => c.FacturaAvanzadoComponent
      ),
  },
  {
    path: ':id',
    title: 'Detalles de la Factura | Factivar',
    loadComponent: () =>
      import('../pages/invoice-template/invoice-template.component').then(
        (c) => c.InvoiceTemplateComponent
      ),
  },
];

export default facturasRoutes;