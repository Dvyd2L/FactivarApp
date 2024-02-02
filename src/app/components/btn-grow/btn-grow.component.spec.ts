import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGrowComponent } from './btn-grow.component';

describe('BtnGrowComponent', () => {
  let component: BtnGrowComponent;
  let fixture: ComponentFixture<BtnGrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnGrowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnGrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
