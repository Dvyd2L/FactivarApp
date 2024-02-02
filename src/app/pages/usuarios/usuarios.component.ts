/**
 * Componente para mostrar la lista de proveedores.
 */
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { LoaderComponent } from '@app/components/loader/loader.component';
import { getData } from '@app/services/data.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [LoaderComponent, AsyncPipe],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent {
  users$ = getData<any[]>('usuarios/all');
}
