import { Routes } from '@angular/router';

const usuariosRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/usuarios/usuarios.component').then(
        (c) => c.UsuariosComponent
      ),
  },
];

export default usuariosRoutes;
