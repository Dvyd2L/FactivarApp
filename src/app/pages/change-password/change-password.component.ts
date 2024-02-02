import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BotonAccesosComponent } from '@app/components/boton-accesos/boton-accesos.component';
import { PasswordInputComponent } from '@app/components/password-input/password-input.component';
import { ILoginUser } from '@app/interfaces/user';
import { AuthService } from '@app/services/auth/auth.service';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    BotonAccesosComponent,
    PasswordInputComponent,
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css',
  providers: [AuthService]
})
export class ChangePasswordComponent {
  private authService = inject(AuthService);
  /**
   * Información de inicio de sesión.
   */
  infoLogin: ILoginUser = {
    email: '',
    password: '',
  };

  /**
   * Establece la contraseña del usuario.
   * @param value - Valor de la contraseña.
   */
  setPassword(value: string) {
    this.infoLogin.password = value;
  }

  /**
   * Realiza el inicio de sesión.
   */
  send() {
    console.log(this.infoLogin);
    this.authService.login(this.infoLogin);
  }
}
