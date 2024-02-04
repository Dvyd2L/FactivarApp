/**
 * Servicio para manejar las operaciones relacionadas con las facturas.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IFacturaResponse, IFactura, IFacturaNueva } from '@app/interfaces/factura.interface';
import { environment } from '@environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FacturasService {
  private http = inject(HttpClient);
  private urlAPI = environment.urlAPI + 'api';

  /**
   * Obtiene todas las facturas.
   * @returns Un Observable que emite un arreglo de objetos IFacturaResponse.
   */
  public getFacturas(): Observable<IFacturaResponse[]> {
    return this.http.get<IFacturaResponse[]>(`${this.urlAPI}facturas`);
  }

  /**
   * Agrega una nueva factura.
   * @param factura La factura a agregar.
   * @returns Un Observable que emite un objeto IFactura.
   */
  public addFactura(factura: IFacturaNueva): Observable<IFacturaNueva> {

    const datos = {
      numeroFactura: factura.numeroFactura,
      pendientePago: factura.pendientePago,
      descripcionOperacion: factura.descripcionOperacion,
      fechaExpedicion:
        new Date(factura.fechaExpedicion).getFullYear() +
        '-' +
        (new Date(factura.fechaExpedicion).getMonth() + 1).toString().padStart(2,'0') +
        '-' +
        new Date(factura.fechaExpedicion).getDate().toString().padStart(2,'0'),
      fechaCobro:
        new Date(factura.fechaCobro).getFullYear() +
        '-' +
        (new Date(factura.fechaCobro).getMonth() + 1).toString().padStart(2,'0') +
        '-' +
        new Date(factura.fechaCobro).getDate().toString().padStart(2,'0'),
      clienteId: factura.clienteId,
      proveedorId: factura.proveedorId,
      articulos: factura.articulos.map((x) => {
        return {
          ...x,
          iva: Number(x.iva),
        }
      })
    };

    console.log(datos);

    return this.http.post<IFacturaNueva>(`${this.urlAPI}/facturas`, datos);
  }

  /**
   * Actualiza una factura existente.
   * @param factura La factura a actualizar.
   * @returns Un Observable que emite un objeto IFactura.
   */
  public updateFactura(factura: IFactura): Observable<IFactura> {
    return this.http.put<IFactura>(
      `${this.urlAPI}facturas/${factura.numeroFactura}`,
      factura
    );
  }

  /**
   * Elimina una factura.
   * @param numeroFactura El número de factura a eliminar.
   * @returns Un Observable que emite un objeto IFactura.
   */
  public deleteFactura(numeroFactura: number): Observable<IFactura> {
    return this.http.delete<IFactura>(
      `${this.urlAPI}facturas/${numeroFactura}`
    );
  }
}
