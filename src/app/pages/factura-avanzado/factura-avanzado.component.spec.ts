/**
 * Pruebas unitarias para el componente FacturaAvanzadoComponent.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaAvanzadoComponent } from './factura-avanzado.component';

describe('FacturaAvanzadoComponent', () => {
  let component: FacturaAvanzadoComponent;
  let fixture: ComponentFixture<FacturaAvanzadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturaAvanzadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacturaAvanzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Verifica que el componente se haya creado correctamente.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
