import { Routes } from '@angular/router';

const authRoutes: Routes = [
  {
    path: 'login',
    title: 'Login | Factivar',
    loadComponent: () =>
      import('../pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'register',
    title: 'Register | Factivar',
    loadComponent: () =>
      import('../pages/register/register.component').then(
        (c) => c.RegisterComponent
      ),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

export default authRoutes;
