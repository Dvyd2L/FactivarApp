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
import { SocialAuthService } from '@app/services/auth/social-auth.service';
import { UserService } from '@app/services/user.service';
import { AvatarModule } from 'primeng/avatar';
// import { AvatarGroupModule } from 'primeng/avatargroup';
import { BtnGrowComponent } from '../btn-grow/btn-grow.component';
import { RouterLink } from '@angular/router';
import { IndexedDBService } from '@app/db/indexed-db.service';
import { StoreEnum } from '@app/interfaces/enums/store.enum';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [BotonAccesosComponent, AvatarModule, BtnGrowComponent, RouterLink],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css',
  providers: [],
})
export class AvatarComponent {
  /**
   * Servicio para obtener los datos del usuario.
   */
  private userService = inject(UserService<IUserPayload>);
  /**
   * Servicio para gestionar la autenticación.
   */
  private idxDB = inject(IndexedDBService);
  private authService = inject(AuthService);
  /**
   * Servicio para gestionar la autenticación social.
   */
  private socialAuthService = inject(SocialAuthService);
  /**
   * Datos del usuario actual.
   */
  public user!: IUserPayload;

  /**
   * Método que se ejecuta al inicializar el componente.
   * Suscribe al Observable del usuario para obtener los datos del usuario actual.
   */
  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (data) => (this.user = data),
      error: (err) => console.error(err),
    });

    if (!this.user) {
      this.idxDB.read<IUserPayload>(StoreEnum.USER).subscribe({
        next: (data) => {
          if (data instanceof Array) {
            this.user = data[0]
          } else {
            this.user = data
          }
        },
        error: (err) => console.error(err),
      });
    }
  }

  /**
   * Método para cerrar la sesión del usuario.
   * Si el usuario ha iniciado sesión con una cuenta social, se realiza el cierre de sesión correspondiente.
   * Si el usuario ha iniciado sesión con una cuenta de correo electrónico, se realiza el cierre de sesión correspondiente.
   */
  public cerrarSesion() {
    if (this.socialAuthService.getProfile()) {
      this.socialAuthService.logout();
    } else {
      this.authService.logout({ email: this.user.Email });
    }
  }
}
