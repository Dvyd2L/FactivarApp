import { LOCALE_ID } from '@angular/core';

/**
 * Provee de configuración local a la aplicación
 * @returns Proveedor del identificador de localización
 */
export const provideLocale = (locale: string = 'es-ES') => {
  const provider = {
    /**
     * Proveedor del identificador de localización.
     */
    provide: LOCALE_ID /** imported from @angular/core */,
    /**
     * Valor del identificador de localización.
     */
    useValue: locale /** default locale fixed to es-ES */,
  };

  return provider;
};
