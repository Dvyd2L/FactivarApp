/**
 * Componente de la página de inicio.
 */
import { Component } from '@angular/core';
import { BotonAccesosComponent } from '../../components/boton-accesos/boton-accesos.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { HexagonsComponent } from '../../components/hexagons/hexagons.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    BotonAccesosComponent,
    RouterLink,
    RouterLinkActive,
    FooterComponent,
    HexagonsComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
