/**
 * Componente Avatar.
 *
 * Este componente muestra la imagen y la información del usuario actual.
 *
 * @remarks
 * Este componente depende de los siguientes módulos y servicios:
 * - BotonAccesosComponent: componente para mostrar los botones de acceso.
 * - AvatarModule: módulo de PrimeNG para mostrar la imagen del avatar.
 * - BtnGrowComponent: componente para mostrar un botón de crecimiento.
 * - UserService: servicio para obtener los datos del usuario.
 * - AuthService: servicio para gestionar la autenticación.
 * - SocialAuthService: servicio para gestionar la autenticación social.
 *
 * @example
 * ```html
 * <app-avatar></app-avatar>
 * ```
 *
 * @example
 * ```typescript
 * const avatar = new AvatarComponent();
 * avatar.cerrarSesion();
 * ```
 */
import { Component, inject } from '@angular/core';
import { BotonAccesosComponent } from '../boton-accesos/boton-accesos.component';
import { IUserPayload } from '@app/interfaces/user';
import { AuthService } from '@app/services/auth/auth.service';
// import { SocialAuthService } from '@app/services/auth/social-auth.service';
// import { UserService } from '@app/services/user.service';
import { AvatarModule } from 'primeng/avatar';
// import { AvatarGroupModule } from 'primeng/avatargroup';
import { BtnGrowComponent } from '../btn-grow/btn-grow.component';
import { Router, RouterLink } from '@angular/router';
// import { IndexedDBService } from '@app/db/indexed-db.service';
// import { StoreEnum } from '@app/interfaces/enums/store.enum';
import { StorageHelper } from '@app/helpers/storage.helper';
import { StorageKeyEnum } from '@app/interfaces/enums/storage.enum';
import { UserService } from '@app/services/user.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [
    BotonAccesosComponent,
    AvatarModule,
    BtnGrowComponent,
    RouterLink,
    AsyncPipe,
    NgIf,
  ],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css',
  providers: [Router, AuthService, UserService<IUserPayload>],
})
export class AvatarComponent {
  private userSvc = inject(UserService<IUserPayload>);
  private auth = inject(AuthService);
  private router = inject(Router);

  public user!: IUserPayload;
  public user$ = this.userSvc.user$;

  ngOnInit(): void {
    this.user = StorageHelper.getItem(StorageKeyEnum.User) as IUserPayload;
  }

  public cerrarSesion() {
    this.auth.logout({ email: this.user.Email });
    this.userSvc.clearUser();
    this.user = null!;
    StorageHelper.removeItem(StorageKeyEnum.User);
    this.router.navigate(['/auth', 'login']);
  }
}
