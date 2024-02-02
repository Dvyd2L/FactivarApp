import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LockCheckboxComponent } from '../lock-checkbox/lock-checkbox.component';
import { FormsModule } from '@angular/forms';

/**
 * Componente para la entrada de contraseñas.
 */
@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [FormsModule, LockCheckboxComponent],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.css'
})
export class PasswordInputComponent {
  /**
   * Placeholder para el campo de contraseña.
   */
  @Input() placeholder = 'Contraseña';

  /**
   * Indica si se debe mostrar la contraseña o no.
   */
  showPassword: boolean = false;

  /**
   * Valor actual de la contraseña.
   */
  password = '';

  /**
   * Evento que se emite cuando cambia el valor de la contraseña.
   */
  @Output() passwordValueChange = new EventEmitter<string>();
  
  /**
   * Alterna la visibilidad de la contraseña.
   * @param checked - Indica si la casilla de verificación está marcada o no.
   */
  showHidePassword(checked: boolean) {
    this.showPassword = !this.showPassword;
    // this.showPassword = checked;
  }

  /**
   * Emite el valor actual de la contraseña.
   */
  emitPassword() {
    this.passwordValueChange.emit(this.password);
  }
}