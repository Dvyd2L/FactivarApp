/**
 * Interfaz que representa un proveedor.
 */
export interface IProveedor {
  /**
   * CIF del proveedor.
   */
  cif: string;
  
  /**
   * Nombre del proveedor.
   */
  nombre: string;
  
  /**
   * Dirección del proveedor.
   */
  direccion: string;
  
  /**
   * Teléfono del proveedor.
   */
  telefono: string|number;
}
