import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSalesFirstComponent } from './filter-sales-first.component';

describe('FilterSalesFirstComponent', () => {
  let component: FilterSalesFirstComponent;
  let fixture: ComponentFixture<FilterSalesFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterSalesFirstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterSalesFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
