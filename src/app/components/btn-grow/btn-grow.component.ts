import { Component, Input } from '@angular/core';

/**
 * Componente de botón que crece al pasar el mouse por encima.
 */
@Component({
  selector: 'app-btn-grow',
  standalone: true,
  imports: [],
  templateUrl: './btn-grow.component.html',
  styleUrl: './btn-grow.component.css',
})
export class BtnGrowComponent {
  /**
   * Texto que se muestra en el botón.
   */
  @Input() text: string = '';
}
