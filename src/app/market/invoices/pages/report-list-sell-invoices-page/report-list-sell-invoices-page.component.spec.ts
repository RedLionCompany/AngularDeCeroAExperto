import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportListSellInvoicesPageComponent } from './report-list-sell-invoices-page.component';

describe('ReportListSellInvoicesPageComponent', () => {
  let component: ReportListSellInvoicesPageComponent;
  let fixture: ComponentFixture<ReportListSellInvoicesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportListSellInvoicesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportListSellInvoicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
