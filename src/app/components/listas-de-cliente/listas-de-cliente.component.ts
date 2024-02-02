import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ICliente } from '@app/interfaces/cliente.interface';
import { ClientesService } from '@app/services/clientes.service';
import { ConfirmationService } from 'primeng/api';

/**
 * Componente para mostrar y gestionar listas de clientes.
 */
@Component({
  selector: 'app-listas-de-cliente',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './listas-de-cliente.component.html',
  styleUrl: './listas-de-cliente.component.css',
  providers: [ConfirmationService],
})
export class ListasDeClienteComponent implements OnInit {
  @ViewChild('formulario') formulario!: NgForm;
  visibleError = false;
  mensajeError = '';
  clientes: ICliente[] = [];
  visibleConfirm = false;
  editar = false;
  fechaFin: Date | string = new Date();
  fechaInicio: Date | string = new Date();

  cliente: ICliente = {
    cif: '',
    nombre: '',
    direccion: '',
    telefono: '',
    email: '',
    fechaAlta: '',
  };

  constructor(
    private confirmationService: ConfirmationService,
    private clientesService: ClientesService
  ) {}

  /**
   * Método que se ejecuta al inicializar el componente.
   */
  ngOnInit(): void {
    this.getClientes();
  }

  /**
   * Obtiene la lista de clientes.
   */
  getClientes() {
    // this.clientesService.getClientes().subscribe({
    //   next: (data) => {
    //     this.visibleError = false;
    //     this.clientes = data;
    //   },
    //   error: (err) => {
    //     this.visibleError = true;
    //     this.mensajeError = err.error.error;
    //   },
    // });
  }

  /**
   * Busca un cliente por su CIF.
   */
  buscarPorCif() {
    this.clientesService.getClienteById(this.cliente.cif).subscribe({
      next: (data) => {
        this.visibleError = false;
        this.clientes = [data];
      },
      error: (err) => {
        this.visibleError = true;
        this.mensajeError = err.error.error;
      },
    });
  }

  /**
   * Busca clientes entre dos fechas.
   */
  buscarEntreFechas() {
    console.log(this.fechaInicio, this.fechaFin);
    this.clientesService.getClienteEntreFechas(this.fechaInicio, this.fechaFin).subscribe({
      next: (data) => {
        this.visibleError = false;
        this.clientes = data;
      },
      error: (err) => {
        this.visibleError = true;
        this.mensajeError = err.error.error;
      },
    });
  }

  /**
   * Modifica un cliente.
   * @param cliente El cliente a modificar.
   */
  modificarCliente(cliente: ICliente) {
    // const clienteModificado: ICliente = { ...cliente };

    // clienteModificado.nombre = 'Nuevo nombre';
    // clienteModificado.direccion = 'Nueva dirección';
    // clienteModificado.telefono = 'Nuevo teléfono';
    // clienteModificado.email = 'Nuevo email';
    // clienteModificado.fechaAlta = new Date();
  }
}
