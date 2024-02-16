/**
 * Componente de botón de accesos.
 */
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-boton-accesos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './boton-accesos.component.html',
  styleUrl: './boton-accesos.component.css',
})
export class BotonAccesosComponent {
  /**
   * Texto que se muestra en el botón.
   */
  @Input() texto: string = '';
  @Input() route: string | any[] | null | undefined = null;
}
