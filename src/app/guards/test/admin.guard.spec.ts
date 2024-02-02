/**
 * Pruebas unitarias para el guardia 'adminGuard'.
 */
import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminGuard } from '../admin.guard';

describe('adminGuard', () => {
  /**
   * Función que ejecuta el guardia 'adminGuard' en el contexto de inyección de dependencias de TestBed.
   * @param guardParameters Los parámetros del guardia.
   * @returns El resultado de la ejecución del guardia.
   */
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  /**
   * Prueba para verificar si el guardia 'adminGuard' ha sido creado correctamente.
   */
  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
