import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICliente } from '../interfaces/cliente.interface';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';
import { IUserPayload } from '@app/interfaces/user';

/**
 * Servicio para gestionar los clientes.
 */
@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private urlAPI = environment.urlAPI + 'api';

  /**
   * Constructor del servicio ClientesService.
   * @param http Instancia de HttpClient para realizar peticiones HTTP.
   * @param userService Instancia de UserService para gestionar la información del usuario.
   */
  public constructor(
    private http: HttpClient,
    private userService: UserService<IUserPayload>
  ) {}

  /**
   * Obtiene todos los clientes.
   * @returns Un Observable que emite un array de objetos de tipo ICliente.
   */
  public getClientes(): Observable<ICliente[]> {
    const headers = this.setHeaders();

    return this.http.get<ICliente[]>(`${this.urlAPI}/clientes/all`, {
      headers,
    });
  }

  /**
   * Obtiene un cliente por su CIF.
   * @param cif El CIF del cliente.
   * @returns Un Observable que emite un objeto de tipo ICliente.
   */
  public getClienteById(cif: string): Observable<ICliente> {
    return this.http.get<ICliente>(`${this.urlAPI}/clientes/${cif}`);
  }

  /**
   * Obtiene los clientes dados de alta entre dos fechas.
   * @param fechamin La fecha mínima.
   * @param fechamax La fecha máxima.
   * @returns Un Observable que emite un array de objetos de tipo ICliente.
   */
  public getClienteEntreFechas(
    fechamin: string | Date,
    fechamax: string | Date
  ): Observable<ICliente[]> {
    const headers = this.setHeaders();
    return this.http.get<ICliente[]>(
      `${this.urlAPI}/clientes/alta-entre-fechas/${fechamin}/${fechamax}`,
      {
        headers,
      }
    );
  }

  /**
   * Agrega un nuevo cliente.
   * @param cliente El objeto de tipo ICliente a agregar.
   * @returns Un Observable que emite un objeto de tipo ICliente.
   */
  public addCliente(cliente: ICliente): Observable<ICliente> {
    const headers = this.setHeaders();
    return this.http.post<ICliente>(`${this.urlAPI}/clientes`, cliente, {
      headers,
    });
  }

  /**
   * Actualiza un cliente existente.
   * @param cliente El objeto de tipo ICliente a actualizar.
   * @returns Un Observable que emite un objeto de tipo ICliente.
   */
  public updateCliente(cliente: ICliente): Observable<ICliente> {
    const headers = this.setHeaders();
    return this.http.put<ICliente>(
      `${this.urlAPI}/clientes` /* /${cliente.cif} */,
      cliente,
      {
        headers,
      }
    );
  }

  /**
   * Elimina un cliente por su CIF.
   * @param cif El CIF del cliente a eliminar.
   * @returns Un Observable que emite un objeto de tipo ICliente.
   */
  public deleteCliente(cif: string): Observable<ICliente> {
    const headers = this.setHeaders();
    return this.http.delete<ICliente>(`${this.urlAPI}/clientes/${cif}`, {
      headers,
    });
  }

  private setHeaders = () =>
    new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.userService.getToken()}`,
    });
}
