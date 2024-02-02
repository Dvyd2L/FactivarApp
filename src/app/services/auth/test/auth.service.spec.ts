/**
 * Pruebas unitarias para el servicio AuthService.
 */
import { TestBed } from '@angular/core/testing';
import { AuthService } from '../auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  /**
   * Prueba si el servicio AuthService ha sido creado correctamente.
   */
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
