import { IProduct } from "@app/interfaces/factivar";

/**
 * Calcula el importe del IVA para cada producto de la lista.
 * @param products - La lista de productos.
 * @returns La lista de productos con el importe del IVA calculado.
 */
export const calculateImporteIva = (products: IProduct[]): IProduct[] =>
  products.map((x) => {
    return {
      ...x,
      bImponible: x.unidades * x.pUnitario,
      cuotaIva: (x.unidades * x.pUnitario * x.iva) / 100,
    };
  });

/**
 * Calcula los importes totales para la lista de productos.
 * @param products - La lista de productos.
 * @returns Un objeto con los importes subTotal e importeTotal calculados.
 */
export const calculateImportes = (products: IProduct[]) => {
  const importes = {
    subTotal: 0,
    importeTotal: 0,
  };

  calculateImporteIva(products).map((x) => {
    importes.subTotal += x.bImponible;
    importes.importeTotal += x.bImponible + x.cuotaIva;
  });

  return importes;
};
