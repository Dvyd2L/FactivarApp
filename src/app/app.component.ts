import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/**
 * Componente principal de la aplicación.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet],
  providers: [],
})
export class AppComponent {
  /**
   * Título de la aplicación.
   */
  public title = 'FactivarApp';
}
