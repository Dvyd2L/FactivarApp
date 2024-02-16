import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-hexagon-item',
  templateUrl: './hexagon-item.component.html',
  styleUrls: ['./hexagon-item.component.css'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  providers: [],
})
export class HexagonItemComponent {
  @Input() title: string = '';
  @Input() route: string | any[] | null | undefined = [];
}
