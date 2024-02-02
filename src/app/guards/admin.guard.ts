import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageHelper } from '@app/helpers/storage.helper';
import { RolesEnum } from '@app/interfaces/enums/roles.enum';
import { StorageKeyEnum } from '@app/interfaces/enums/storage.enum';
import { IUserPayload } from '@app/interfaces/user';

/**
 * Guardia que permite el acceso solo a los usuarios con el rol de administrador.
 * Si el usuario no tiene el rol de administrador, se redirige a la página de chat.
 * @returns {boolean} - Indica si el usuario tiene el rol de administrador y puede acceder.
 */
export const adminGuard: CanActivateFn = (): boolean => {
  const router = inject(Router);
  const user = StorageHelper.getItem<IUserPayload>(StorageKeyEnum.User);

  if (user?.Role === RolesEnum.Admin) {
    return true;
  }
  router.navigate(['login']);
  return false;
};
