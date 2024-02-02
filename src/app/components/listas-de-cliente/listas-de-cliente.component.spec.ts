import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasDeClienteComponent } from './listas-de-cliente.component';

describe('ListasDeClienteComponent', () => {
  let component: ListasDeClienteComponent;
  let fixture: ComponentFixture<ListasDeClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListasDeClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListasDeClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
