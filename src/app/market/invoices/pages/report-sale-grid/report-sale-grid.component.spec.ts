import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSaleGridComponent } from './report-sale-grid.component';

describe('ReportSaleGridComponent', () => {
  let component: ReportSaleGridComponent;
  let fixture: ComponentFixture<ReportSaleGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportSaleGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportSaleGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
