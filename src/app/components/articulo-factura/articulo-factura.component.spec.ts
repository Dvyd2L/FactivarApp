import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloFacturaComponent } from './articulo-factura.component';

describe('ArticuloFacturaComponent', () => {
  let component: ArticuloFacturaComponent;
  let fixture: ComponentFixture<ArticuloFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticuloFacturaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticuloFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
