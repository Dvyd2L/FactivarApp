import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockCheckboxComponent } from './lock-checkbox.component';

describe('LockCheckboxComponent', () => {
  let component: LockCheckboxComponent;
  let fixture: ComponentFixture<LockCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LockCheckboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LockCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
