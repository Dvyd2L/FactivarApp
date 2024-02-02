import { Component, Input } from '@angular/core';

/**
 * Componente que representa un elemento hexagonal.
 */
@Component({
  selector: 'app-hexagon-item',
  templateUrl: './hexagon-item.component.html',
  styleUrls: ['./hexagon-item.component.css'],
  standalone: true,
  imports: [],
  providers: [],
})
export class HexagonItemComponent {
  /**
   * Título del elemento hexagonal.
   */
  @Input() title: string = '';
}
