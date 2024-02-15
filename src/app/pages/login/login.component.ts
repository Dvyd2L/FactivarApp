import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LoaderComponent } from '@app/components/loader/loader.component';
/**
 * Componente de inicio de sesión.
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    BotonAccesosComponent,
    PasswordInputComponent,
    GoogleSigninComponent,
    FacebookSigninComponent,
    ToastModule,
    LoaderComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService, AuthService, Router],
})
export class LoginComponent {
  private readonly router = inject(Router);
  private readonly auth = inject(AuthService);
  private readonly messageService = inject(MessageService);
  public readonly loading = signal(false);
  public readonly loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  public readonly infoLogin = {
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
    this.loading.update((curr) => !curr);
    this.auth.login(this.infoLogin as ILoginUser).subscribe({
      next: (data) => this.router.navigate(['/clientes']),
      error: (err) => {
        this.loading.update((curr) => !curr)
        console.error({ err });

        if (err instanceof HttpErrorResponse) {
          this.errorMessage(err, this.messageService);
        }
      },
      complete: () => this.loading.update((curr) => !curr),
    });
  }
  /**
   * Realiza el inicio de sesión con Google.
   * @param idToken - Token de identificación de Google.
   */
  public loginWithGoogle(idToken: string) {
    this.auth.loginWithGoogle(idToken);
  }
  private readonly errorMessage = addMessage;
}
