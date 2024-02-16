/**
 * @fileoverview Este archivo contiene la configuración de las rutas de la aplicación.
 * Las rutas están definidas utilizando el enrutador de Angular.
 * Algunas rutas están protegidas por el guardia de autenticación.
 */
import { Routes } from '@angular/router';
import { authGuard } from '../guards/auth.guard';
import { adminGuard } from '../guards/admin.guard';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Inicio | Factivar',
    loadComponent: () =>
      import('../pages/home/home-page.component').then(
        (c) => c.HomePageComponent
      ),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth.routes'),
  },
  {
    path: 'clientes',
    // canActivate: [authGuard],
    loadComponent: () => import('../pages/layout/layout.component'),
    loadChildren: () => import('./clientes.routes'),
  },
  {
    path: 'facturas',
    // canActivate: [authGuard],
    loadComponent: () => import('../pages/layout/layout.component'),
    loadChildren: () => import('./facturas.routes'),
  },
  {
    path: 'usuarios',
    title: 'Usuarios | Factivar',
    // canActivate: [adminGuard],
    loadComponent: () => import('../pages/layout/layout.component'),
    loadChildren: () => import('./usuarios.routes'),
  },
  {
    path: '404',
    title: '404 | Factivar',
    loadComponent: () =>
      import('../pages/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' },
];
