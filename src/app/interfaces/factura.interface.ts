/**
 * Interfaz que representa una factura.
 */
export interface IFactura {
  numeroFactura: number; // Número de la factura
  importe: number; // Importe de la factura
  cliente: string; // Nombre del cliente
  fecha: Date; // Fecha de la factura
}

/**
 * Interfaz que representa la respuesta de una factura.
 */
export interface IFacturaResponse {
  numeroFactura: number; // Número de la factura
  importe: number; // Importe de la factura
  iva: number; // IVA de la factura
  total: number; // Total de la factura
  pendientePago: boolean; // Indica si la factura está pendiente de pago
  descripcionOperacion: string; // Descripción de la operación
  fechaExpedicion: string; // Fecha de expedición de la factura
  fechaCobro: string; // Fecha de cobro de la factura
  clienteId: string; // ID del cliente
  articulos: string; // Artículos de la factura
  cliente: ICliente; // Cliente asociado a la factura
}

// export interface IFacturaResponse {
//   numeroFactura?: number;
//   importe: number;
//   iva: number;
//   pendientePago: boolean;
//   descripcionOperacion: string;
//   fechaExpedicion: Date;
//   fechaCobro: Date;
//   clienteId: string;
//   articulos: IArticulo[];
// }

/**
 * Interfaz que representa un artículo de una factura.
 */
export interface IArticulo {
  descripcion: string; // Descripción del artículo
  unidades: number; // Unidades del artículo
  pUnitario: number; // Precio unitario del artículo
  iva: number; // IVA del artículo
}
import { ICliente } from './cliente.interface';

export interface IFactura {
  numeroFactura: number;
  importe: number;
  cliente: string;
  fecha: Date;
}

export interface IFacturaResponse {
  numeroFactura: number;
  importe: number;
  iva: number;
  total: number;
  pendientePago: boolean;
  descripcionOperacion: string;
  fechaExpedicion: string;
  fechaCobro: string;
  clienteId: string;
  articulos: string;
  cliente: ICliente;
}

export interface IArticulo {
  descripcion: string;
  unidades: number;
  pUnitario: number;
  iva: number;
}
