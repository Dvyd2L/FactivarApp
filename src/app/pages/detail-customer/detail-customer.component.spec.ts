/**
 * Pruebas unitarias para el componente DetailCustomerComponent.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCustomerComponent } from './detail-customer.component';

describe('DetailClientComponent', () => {
  let component: DetailCustomerComponent;
  let fixture: ComponentFixture<DetailCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Verifica si el componente se crea correctamente.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
