import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsColorComponent } from './cards-color.component';

describe('CardsColorComponent', () => {
  let component: CardsColorComponent;
  let fixture: ComponentFixture<CardsColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
