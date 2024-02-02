import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

/**
 * Componente de casilla de verificación de bloqueo.
 */
@Component({
  selector: 'app-lock-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './lock-checkbox.component.html',
  styleUrl: './lock-checkbox.component.css',
})
export class LockCheckboxComponent {
  /**
   * Indica si la casilla de verificación está marcada.
   */
  @Input() isChecked = false;

  /**
   * Evento emitido cuando cambia el estado de la casilla de verificación.
   */
  @Output() lockCheckboxChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  /**
   * Maneja el evento de cambio de la casilla de verificación.
   */
  onChange() {
    this.lockCheckboxChange.emit(!this.isChecked);
  }
}
