import { Component, inject } from '@angular/core';
import { HexagonItemComponent } from '@app/components/hexagon-item/hexagon-item.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { FactivarBrandComponent } from '../factivar-brand/factivar-brand.component';

/**
 * Componente que representa una colección de hexágonos.
 */
@Component({
  selector: 'app-hexagons',
  templateUrl: './hexagons.component.html',
  styleUrls: ['./hexagons.component.css'],
  standalone: true,
  imports: [
    HexagonItemComponent,
    AvatarComponent,
    ThemeToggleComponent,
    RouterLink,
    RouterLinkActive,
    FactivarBrandComponent,
  ],
  providers: [Router],
})
export class HexagonsComponent {
  router = inject(Router);

  toClientes() {
    this.router.navigate(['clientes', 'overview']);
  }
  toFacturas() {
    this.router.navigate(['facturas', 'overview']);
  }
  toUsuarios() {
    this.router.navigate(['usuarios']);
  }
}
