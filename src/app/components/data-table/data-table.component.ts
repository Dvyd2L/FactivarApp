import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICliente } from '@app/interfaces/cliente.interface';
import { ClientesService } from '@app/services/clientes.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { Router } from '@angular/router';

/**
 * Componente de la tabla de datos.
 */
@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [
    DatePipe,
    FormsModule,
    DialogModule,
    TableModule,
    ToastModule,
    ButtonModule,
    ToolbarModule,
    FileUploadModule
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
  providers: [MessageService, ConfirmationService, ClientesService, Router],
})
export class DataTableComponent {
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);

  @Output() evSearch = new EventEmitter<string>();
  @Output() evDelete = new EventEmitter<ICliente>();
  @Output() evUpdate = new EventEmitter<ICliente>();

  /**
   * Indica si el diálogo de cliente está abierto o cerrado.
   */
  clientDialog: boolean = false;
  /**
   * Lista de clientes.
   */
  @Input() clients!: ICliente[];
  /**
   * Cliente seleccionado.
   */
  client!: ICliente;
  /**
   * Clientes seleccionados.
   */
  selectedClients!: ICliente[] | null;
  /**
   * Indica si se ha enviado el formulario.
   */
  submitted: boolean = false;
  /**
   * Lista de estados.
   */
  statuses!: any[];

  /**
   * Manejador de eventos para el cambio de valor en un campo de entrada.
   * @param ev - Evento de cambio de valor.
   */
  eventHandler = (ev: Event) => (ev.target as HTMLInputElement).value;
  /**
   * Emite el evento de búsqueda de cliente por ID.
   * @param cif - ID del cliente a buscar.
   */
  emitSearch = (cif: string) => this.evSearch.emit(cif);
  /**
   * Emite el evento de eliminación de cliente.
   * @param cliente - Cliente a eliminar.
   */
  emitDelete = (cliente: ICliente) => this.evDelete.emit(cliente);
  /**
   * Emite el evento de edicion de cliente.
   * @param cliente - Cliente a editar.
   */
  emitUpdate = (cliente: ICliente) => this.evUpdate.emit(cliente);


  /**
   * Abre el diálogo para crear un nuevo cliente.
   */
  openNew() {
    this.client = {
      cif: '',
      direccion: '',
      email: '',
      nombre: '',
      telefono: '',
      fechaAlta: '',
    };
    this.submitted = false;
    this.clientDialog = true;
  }
  /**
   * Elimina los clientes seleccionados.
   */
  deleteSelectedClients() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected clients?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.clients = this.clients.filter(
          (val) => !this.selectedClients?.includes(val)
        );
        this.selectedClients = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Clients Deleted',
          life: 3000,
        });
      },
    });
  }
  /**
   * Abre el diálogo para editar un cliente.
   * @param client - Cliente a editar.
   */
  editClient(client: ICliente) {
    this.client = { ...client };
    this.clientDialog = true;
  }
  /**
   * Elimina un cliente.
   * @param client - Cliente a eliminar.
   */
  // deleteClient(client: ICliente) {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete ' + client.nombre + '?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.clients = this.clients.filter((val) => val.cif !== client.cif);
  //       this.client = {
  //         cif: '',
  //         direccion: '',
  //         email: '',
  //         nombre: '',
  //         telefono: '',
  //         fechaAlta: '',
  //       };
  //       this.messageService.add({
  //         severity: 'success',
  //         summary: 'Successful',
  //         detail: 'Client Deleted',
  //         life: 3000,
  //       });
  //     },
  //   });
  // }
  /**
   * Oculta el diálogo de cliente.
   */
  hideDialog() {
    this.clientDialog = false;
    this.submitted = false;
  }
  /**
   * Guarda un cliente.
   */
  saveClient() {
    this.submitted = true;

    if (this.client.nombre?.trim()) {
      if (this.client.cif) {
        this.clients[this.findIndexById(this.client.cif)] = this.client;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Client Updated',
          life: 3000,
        });
      } else {
        // this.client.cif = this.createId();
        // this.client.image = 'client-placeholder.svg';
        this.clients.push(this.client);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Client Created',
          life: 3000,
        });
      }

      this.clients = [...this.clients];
      this.clientDialog = false;
      this.client = {
        cif: '',
        direccion: '',
        email: '',
        nombre: '',
        telefono: '',
        fechaAlta: '',
      };
    }
  }
  /**
   * Busca el índice de un cliente por su ID.
   * @param id - ID del cliente.
   * @returns El índice del cliente en la lista.
   */
  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i].cif === id) {
        index = i;
        break;
      }
    }

    return index;
  }
  /**
   * Crea un ID aleatorio para un cliente.
   * @returns El ID generado.
   */
  // createId(): string {
  //   let id = '';
  //   var chars =
  //     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   for (var i = 0; i < 5; i++) {
  //     id += chars.charAt(Math.floor(Math.random() * chars.length));
  //   }
  //   return id;
  // }
  /**
   * Obtiene la gravedad de un estado.
   * @param status - Estado del cliente.
   * @returns La gravedad del estado.
   */
  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'none';
    }
  }
}
