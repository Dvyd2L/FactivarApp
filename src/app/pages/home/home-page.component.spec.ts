import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';

/**
 * Pruebas unitarias para el componente HomePageComponent.
 */
describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageComponent);
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
