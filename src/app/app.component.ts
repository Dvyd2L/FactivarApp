/**
 * Componente principal de la aplicación.
 */
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import { FacturaAvanzadoComponent } from './pages/factura-avanzado/factura-avanzado.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListasDeClienteComponent } from './components/listas-de-cliente/listas-de-cliente.component';
import { MessageService } from 'primeng/api';
import { HexagonsComponent } from '@app/components/hexagons/hexagons.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchDefault,
    NgSwitchCase,
    RouterOutlet,
    LoginComponent,
    RegisterComponent,
    FacturaAvanzadoComponent,
    HomePageComponent,
    ListasDeClienteComponent,
    HexagonsComponent,
    FooterComponent,
  ],
  providers: [MessageService],
})
export class AppComponent {
  /**
   * Título de la aplicación.
   */
  title = 'FactivarApp';

  /**
   * Verifica si la ruta actual es la página de inicio.
   * @returns `true` si la ruta actual es '/home', de lo contrario `false`.
   */
  isHome() {
    return window.location.pathname === '/';
  }

  /**
   * Verifica si la ruta actual es la página de inicio de sesión.
   * @returns `true` si la ruta actual es '/login', de lo contrario `false`.
   */
  isLogin() {
    return window.location.pathname === '/login';
  }

  /**
   * Verifica si la ruta actual es la página de registro.
   * @returns `true` si la ruta actual es '/register', de lo contrario `false`.
   */
  isRegister() {
    return window.location.pathname === '/register';
  }
}
