import { Component } from '@angular/core';
import { BotonAccesosComponent } from '../../components/boton-accesos/boton-accesos.component';
import { FooterComponent } from '../../components/footer/footer.component';
/**
 * Componente de la página de inicio.
 */
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BotonAccesosComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
