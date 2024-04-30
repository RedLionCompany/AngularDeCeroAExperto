import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicePageComponent } from './pages/invoice-page/invoice-page.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { SelectProductComponent } from './components/select-product/select-product.component';
import { SetUpProductComponent } from './components/set-up-product/set-up-product.component';
import { SelectCustomerComponent } from './components/select-customer/select-customer.component';
import { TotalInvoiceComponent } from './components/total-invoice/total-invoice.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    InvoicePageComponent,
    ListProductsComponent,
    SelectProductComponent,
    SetUpProductComponent,
    SelectCustomerComponent,
    TotalInvoiceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
   InvoicePageComponent
  ]
})
export class InvoicesModule { }
