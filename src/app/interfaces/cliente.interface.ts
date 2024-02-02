/**
 * Interfaz que representa un cliente.
 */
export interface ICliente {
  /**
   * CIF del cliente.
   */
  cif: string;
  
  /**
   * Nombre del cliente.
   */
  nombre: string;
  
  /**
   * Dirección del cliente.
   */
  direccion: string;
  
  /**
   * Teléfono del cliente.
   */
  telefono: string | number;
  
  /**
   * Email del cliente.
   */
  email: string;
  
  /**
   * Fecha de alta del cliente (opcional).
   */
  fechaAlta?: Date | string;
}
