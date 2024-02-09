import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hexagon-item',
  templateUrl: './hexagon-item.component.html',
  styleUrls: ['./hexagon-item.component.css'],
  standalone: true,
  imports: [],
  providers: [],
})
export class HexagonItemComponent {
  @Input() title: string = '';
}
