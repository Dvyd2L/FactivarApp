import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ICliente } from 'src/app/interfaces/cliente.interface';
import { ClientesService } from '@app/services/clientes.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { HttpErrorResponse } from '@angular/common/http';
import { DataTableComponent } from '../../components/data-table/data-table.component';
import { Router } from '@angular/router';
import { LoaderComponent } from '@app/components/loader/loader.component';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ConfirmDialogModule,
    ToastModule,
    DataTableComponent,
    LoaderComponent,
  ],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
  providers: [ClientesService, ConfirmationService, MessageService, Router],
})
export class ClientesComponent implements OnInit {
  private router = inject(Router);
  private clientesService = inject(ClientesService);
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);

  @ViewChild('formulario') formulario!: NgForm;
  email: any;
  visibleError = false;
  mensajeError = '';
  clientes: ICliente[] = [];
  visibleConfirm = false;
  editar = false;
  fechaFin!: Date;
  fechaInicio!: Date;
  cliente: ICliente = {
    cif: '',
    nombre: '',
    direccion: '',
    telefono: '',
    email: '',
  };

  ngOnInit(): void {
    this.getClientes();
  }

  setInitialDate(ev: Event) {
    this.fechaInicio = new Date((ev.target as HTMLInputElement).value);
  }

  setEndingDate(ev: Event) {
    this.fechaFin = new Date((ev.target as HTMLInputElement).value);
  }

  getClientes() {
    this.clientesService.getClientes().subscribe({
      next: (data) => {
        this.visibleError = false;
        this.clientes = data;
      },
      error: (err) => {
        if (err instanceof HttpErrorResponse) {
          this.visibleError = true;
          this.mensajeError = err.message;
        }
      },
    });
  }

  buscarPorCif(cif: string) {
    this.router.navigate(['clientes', 'detail', cif]);
  }

  buscarEntreFechas() {
    this.router.navigate([
      `clientes/${this.fechaInicio
        .toLocaleDateString('es', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        .replaceAll('/', '-')}/${this.fechaFin
        .toLocaleDateString('es', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        .replaceAll('/', '-')}`,
    ]);
  }

  guardar() {
    if (this.editar === false) {
      this.clientesService.addCliente(this.cliente).subscribe({
        next: (data) => {
          this.visibleError = false;
          this.formulario.reset();
          this.getClientes();
          console.log(data);
        },
        error: (err) => {
          console.error({ err });

          if (err instanceof HttpErrorResponse) {
            this.visibleError = true;
            this.mensajeError = err.message;
          }
        },
      });
    } else {
      this.clientesService.updateCliente(this.cliente).subscribe({
        next: (data) => {
          this.visibleError = false;
          this.cancelarEdicion();
          this.formulario.reset();
          this.getClientes();
          this.editar = false;
        },
        error: (err) => {
          console.error({ err });

          if (err instanceof HttpErrorResponse) {
            this.visibleError = true;
            this.mensajeError = err.message;
          }
        },
      });
    }
  }

  edit(cliente: ICliente) {
    this.cliente = { ...cliente };
    this.editar = true;
  }

  cancelarEdicion() {
    this.cliente = {
      cif: '',
      nombre: '',
      direccion: '',
      telefono: '',
      email: '',
      fechaAlta: new Date(),
    };
    this.editar = false;
  }

  confirmDelete(cliente: ICliente) {
    this.confirmationService.confirm({
      message: `¿Eliminar cliente ${cliente.nombre}?`,
      header: '¿Está seguro? Esta acción no se puede deshacer',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      acceptButtonStyleClass: 'btn btn-danger mx-1 p-button-text',
      rejectButtonStyleClass: 'btn btn-primary mx-1 p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Aceptado',
          detail: 'Registro eliminado',
        });
        this.deleteCliente(cliente.cif);
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rechazado',
          detail: 'Se ha cancelado la operación',
          life: 3000,
        });
      },
    });
  }

  deleteCliente(cif: string) {
    this.clientesService.deleteCliente(cif).subscribe({
      next: (data) => {
        this.visibleError = false;
        this.formulario.reset({
          cif: '',
          nombre: '',
          direccion: '',
          telefono: '',
          email: '',
          fechaAlta: new Date(),
        });
        this.getClientes();
      },
      error: (err) => {
        console.error({ err });

        if (err instanceof HttpErrorResponse) {
          this.visibleError = true;
          this.mensajeError = err.message;
        }
      },
    });
  }
}
