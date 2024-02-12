/**
 * Componente de inicio de sesión.
 */
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { BotonAccesosComponent } from '../../components/boton-accesos/boton-accesos.component';
import { ILoginUser } from '@app/interfaces/user';
import { AuthService } from '@app/services/auth/auth.service';
import { environment } from '@environments/environment';
import { FacebookSigninComponent } from '../../components/facebook-signin/facebook-signin.component';
import { GoogleSigninComponent } from '../../components/google-signin/google-signin.component';
import { PasswordInputComponent } from '../../components/password-input/password-input.component';
import { addMessage } from '@app/helpers/message.helper';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    BotonAccesosComponent,
    PasswordInputComponent,
    GoogleSigninComponent,
    FacebookSigninComponent,
    ToastModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService, AuthService, Router],
})
export class LoginComponent {
  private router = inject(Router);
  private auth = inject(AuthService);
  private messageService = inject(MessageService);

  public infoLogin: ILoginUser = {
    email: '',
    password: '',
  };
  /**
   * Establece la contraseña del usuario.
   * @param value - Valor de la contraseña.
   */
  public setPassword(value: string) {
    this.infoLogin.password = value;
  }

  public login() {
    this.auth.login(this.infoLogin).subscribe({
      next: (data) => this.router.navigate(['/clientes']),
      error: (err) => {
        console.error({ err });

        if (err instanceof HttpErrorResponse) {
          this.errorMessage(err, this.messageService);
        }
      },
    });
  }
  /**
   * Realiza el inicio de sesión con Google.
   * @param idToken - Token de identificación de Google.
   */
  public loginWithGoogle(idToken: string) {
    this.auth.loginWithGoogle(idToken);
  }
  private errorMessage = addMessage;
}
