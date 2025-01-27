import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicePageComponent } from './pages/invoice-page/invoice-page.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { SelectProductComponent } from './components/select-product/select-product.component';
import { SetUpProductComponent } from './components/set-up-product/set-up-product.component';
import { SelectCustomerComponent } from './components/select-customer/select-customer.component';
import { TotalInvoiceComponent } from './components/total-invoice/total-invoice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ShowCustomerComponent } from './components/show-customer/show-customer.component';
import { CustomerSelectorComponent } from '../customers/components/customer-selector/customer-selector.component';
import { BrowserModule } from '@angular/platform-browser';


import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { PickCustomerComponent } from './components/pick-customer/pick-customer.component';
import { ReportListSellInvoicesPageComponent } from './pages/report-list-sell-invoices-page/report-list-sell-invoices-page.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { ReportSaleGridComponent } from './pages/report-sale-grid/report-sale-grid.component';
import { ReportSalesComponent } from './pages/report-sales/report-sales.component';
import { FilterSalesComponent } from './components/filter-sales/filter-sales.component';
import { ProductModalComponent } from './components/product-modal/product-modal.component';
import { CustomerModalComponent } from './components/customer-modal/customer-modal.component';
import { FilterSalesFirstComponent } from './components/filter-sales-first/filter-sales-first.component';
import { ReportSalesPageComponent } from './pages/report-sales-page/report-sales-page.component';




@NgModule({
  declarations: [
    InvoicePageComponent,
    ReportSalesPageComponent,
    ListProductsComponent,
    SelectProductComponent,
    SetUpProductComponent,
    SelectCustomerComponent,
    TotalInvoiceComponent,
    ShowCustomerComponent,
    CustomerSelectorComponent,
    PickCustomerComponent,
    ReportListSellInvoicesPageComponent,
    InventoryComponent,
    ReportSaleGridComponent,
    ReportSalesComponent,
    FilterSalesComponent,
    ProductModalComponent,
    CustomerModalComponent,
    FilterSalesFirstComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule
  ],
  exports: [
   InvoicePageComponent,
   ReportSalesPageComponent
  ]
})
export class InvoicesModule { }
