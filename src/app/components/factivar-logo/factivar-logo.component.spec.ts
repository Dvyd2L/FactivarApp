import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactivarLogoComponent } from './factivar-logo.component';

describe('FactivarLogoComponent', () => {
  let component: FactivarLogoComponent;
  let fixture: ComponentFixture<FactivarLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactivarLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FactivarLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
