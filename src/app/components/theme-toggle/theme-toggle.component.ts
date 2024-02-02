import { Component } from '@angular/core';

/**
 * Componente para alternar el tema de la aplicación.
 */
@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css',
})
export class ThemeToggleComponent {
  /**
   * Alterna el tema de la aplicación entre oscuro y claro.
   */
  toggle = () => {
    const $body = document.body;

    $body.getAttribute('data-bs-theme') === 'dark'
      ? $body.setAttribute('data-bs-theme', 'light')
      : $body.setAttribute('data-bs-theme', 'dark');
  };
}
