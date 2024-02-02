/**
 * Pruebas unitarias para el guardia de autenticación.
 */
import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authGuard } from '../auth.guard';

describe('authGuard', () => {
  /**
   * Función que ejecuta el guardia de autenticación.
   * @param guardParameters Los parámetros del guardia de autenticación.
   * @returns El resultado de la ejecución del guardia de autenticación.
   */
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  /**
   * Prueba para verificar que el guardia de autenticación ha sido creado.
   */
  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
