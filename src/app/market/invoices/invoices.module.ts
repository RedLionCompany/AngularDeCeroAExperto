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
import { ShowCustomerComponent } from './components/show-customer/show-customer.component';
import { CustomerSelectorComponent } from '../customers/components/customer-selector/customer-selector.component';
import { BrowserModule } from '@angular/platform-browser';


import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';




@NgModule({
  declarations: [
    InvoicePageComponent,
    ListProductsComponent,
    SelectProductComponent,
    SetUpProductComponent,
    SelectCustomerComponent,
    TotalInvoiceComponent,
    ShowCustomerComponent,
    CustomerSelectorComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    MatDialogModule,
     MatFormFieldModule,
    MatInputModule,
     MatButtonModule,
     MatListModule
  ],
  exports: [
   InvoicePageComponent
  ]
})
export class InvoicesModule { }
