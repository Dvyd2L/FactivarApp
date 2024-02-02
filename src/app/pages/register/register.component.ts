import { Component, ViewChild, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { BotonAccesosComponent } from '../../components/boton-accesos/boton-accesos.component';
import { AuthService } from '@app/services/auth/auth.service';
import { IRegisterUser } from '@app/interfaces/user';
import { PasswordInputComponent } from '../../components/password-input/password-input.component';
import { ToastModule } from 'primeng/toast';
import { HttpErrorResponse } from '@angular/common/http';
import { addMessage } from '@app/helpers/message.helper';

/**
 * Componente de registro de usuarios.
 */
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    BotonAccesosComponent,
    PasswordInputComponent,
    RouterLink,
    ToastModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [MessageService, AuthService, Router],
})
export class RegisterComponent {
  private router = inject(Router);
  private auth = inject(AuthService);
  private messageService = inject(MessageService);
  @ViewChild('fRegister') fRegister!: NgForm;
  infoRegister: IRegisterUser = {
    nombre: '',
    apellidos: '',
    avatar: undefined,
    email: '',
    telefono: '',
    password: '',
  };
  password: string = '';
  
  private errorMessage = addMessage
  /**
   * Establece la contraseña del usuario.
   * @param input - Contraseña ingresada por el usuario.
   */
  setPassword(input: string) {
    this.infoRegister.password = input;
  }

  /**
   * Establece la contraseña de repetición del usuario.
   * @param input - Contraseña de repetición ingresada por el usuario.
   */
  setRepeatPassword(input: string) {
    this.password = input;
  }

  /**
   * Maneja el evento de selección de archivo.
   * @param event - Evento de selección de archivo.
   */
  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];

    if (file) {
      this.infoRegister.avatar = file;
    }
  }


  /**
   * Realiza el registro del usuario.
   */
  register() {
    this.auth.register(this.infoRegister).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigateByUrl('login');
      },
      error: (err) => {
        if (err instanceof HttpErrorResponse) {
          this.errorMessage(err, this.messageService);
        }
      },
    });
  }

  /**
   * Valida si la contraseña y la contraseña de repetición coinciden.
   */
  validPass() {
    if (this.infoRegister.password !== this.password) {
      console.log('Las contraseñas no coinciden');
    }
  }
}
