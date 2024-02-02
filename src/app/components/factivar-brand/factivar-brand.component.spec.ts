import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactivarBrandComponent } from './factivar-brand.component';

describe('FactivarBrandComponent', () => {
  let component: FactivarBrandComponent;
  let fixture: ComponentFixture<FactivarBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactivarBrandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FactivarBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
