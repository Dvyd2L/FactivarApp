import { CuotasIvaEnum } from "./enums/cuotas-iva";

/**
 * Represents an invoice.
 */
export interface IInvoice {
  facturaId: number;
  numeroFactura: number;
  importe: number;
  iva: number;
  calculosIvas: any[]
  desgloseIva: any;
  total: number;
  pendientePago: boolean;
  descripcionOperacion: string;
  fechaExpedicion: string;
  fechaCobro: string;
  proveedor: ICustomer;
  cliente: ICustomer;
  articulos: IProduct[];
}

/**
 * Represents a customer.
 */
export interface ICustomer {
  /**
   * The CIF (tax identification number) of the customer.
   */
  cif: string;
  /**
   * The name of the customer.
   */
  nombre: string;
  /**
   * The address of the customer.
   */
  direccion: string;
  /**
   * The phone number of the customer.
   */
  telefono: number;
  /**
   * The email address of the customer.
   */
  email: string;
  /**
   * The date of registration of the customer.
   */
  fechaAlta: string;
  facturaClientes?: IInvoice[];
  facturaProveedors?: IInvoice[];
}

/**
 * Represents a product.
 */
export interface IProduct {
  /**
   * The description of the product.
   */
  descripcion: string;
  /**
   * The number of units of the product.
   */
  unidades: number;
  /**
   * The unit price of the product.
   */
  pUnitario: number;
  /**
   * The taxable base amount of the product.
   */
  bImponible: number;
  /**
   * The VAT rate of the product.
   */
  iva: CuotasIvaEnum;
  /**
   * The VAT amount of the product.
   */
  cuotaIva: number;
  /**
   * The total amount of the product.
   */
  importe: number;
}
