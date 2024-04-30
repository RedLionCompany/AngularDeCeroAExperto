import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpProductComponent } from './set-up-product.component';

describe('SetUpProductComponent', () => {
  let component: SetUpProductComponent;
  let fixture: ComponentFixture<SetUpProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetUpProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetUpProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
