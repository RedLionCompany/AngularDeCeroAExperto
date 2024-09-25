import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDefaltCustomerComponent } from './select-defalt-customer.component';

describe('SelectDefaltCustomerComponent', () => {
  let component: SelectDefaltCustomerComponent;
  let fixture: ComponentFixture<SelectDefaltCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectDefaltCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectDefaltCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
