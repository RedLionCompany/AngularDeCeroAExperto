import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/components/counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { InvoicesModule } from './market/invoices/invoices.module';
import { HttpClient } from '@angular/common/http';
import { SelectDefaltCustomerComponent } from './market/customers/components/select-defalt-customer/select-defalt-customer.component';
import { CustomerSelectorComponent } from './market/customers/components/customer-selector/customer-selector.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SelectDefaltCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule,
    InvoicesModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
