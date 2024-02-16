import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
/**
 * Componente para la página de "No encontrado".
 */
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {}
