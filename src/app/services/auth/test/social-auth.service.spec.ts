/**
 * Pruebas unitarias para el servicio SocialAuthService.
 */
import { TestBed } from '@angular/core/testing';

import { SocialAuthService } from '../social-auth.service';

describe('SocialAuthService', () => {
  let service: SocialAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialAuthService);
  });

  /**
   * Prueba para verificar si el servicio ha sido creado correctamente.
   */
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
