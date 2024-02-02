import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAccesosComponent } from './boton-accesos.component';

describe('BotonAccesosComponent', () => {
  let component: BotonAccesosComponent;
  let fixture: ComponentFixture<BotonAccesosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonAccesosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotonAccesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
