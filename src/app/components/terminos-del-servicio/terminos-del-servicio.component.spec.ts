import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosDelServicioComponent } from './terminos-del-servicio.component';

describe('TerminosDelServicioComponent', () => {
  let component: TerminosDelServicioComponent;
  let fixture: ComponentFixture<TerminosDelServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminosDelServicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TerminosDelServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
