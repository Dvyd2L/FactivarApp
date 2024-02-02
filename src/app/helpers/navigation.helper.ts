import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const toLogin = (router = inject(Router)) =>
  router.navigate(['usuarios', 'overview']);
export const toHome = (router = inject(Router)) =>
  router.navigate(['usuarios', 'overview']);
export const toClientes = (router = inject(Router)) =>
  router.navigate(['clientes', 'overview']);
export const toFacturas = (router = inject(Router)) =>
  router.navigate(['facturas', 'overview']);
export const toUsuarios = (router = inject(Router)) =>
  router.navigate(['usuarios']);

export const navigateTo = (routes: string[], router = inject(Router)) => {
  const rutas = routes;
  const enrutador = router;

  return () => enrutador.navigate([...rutas]);
};
