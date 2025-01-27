import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicePageComponent } from './market/invoices/pages/invoice-page/invoice-page.component';
import { InventoryComponent } from './market/invoices/pages/inventory/inventory.component';
import { ReportSalesPageComponent } from './market/invoices/pages/report-sales-page/report-sales-page.component';

const routes: Routes = [
  { path: '', component:  InventoryComponent},
  { path: 'sales', component: InvoicePageComponent },
  { path: 'sales/report', component: ReportSalesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
