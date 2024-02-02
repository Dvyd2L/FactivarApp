/**
 * Componente de botón de accesos.
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-accesos',
  standalone: true,
  imports: [],
  templateUrl: './boton-accesos.component.html',
  styleUrl: './boton-accesos.component.css'
})
export class BotonAccesosComponent {
  /**
   * Texto que se muestra en el botón.
   */
  @Input() texto: string = 'continuar';
}
