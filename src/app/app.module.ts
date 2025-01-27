import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/components/counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { InvoicesModule } from './market/invoices/invoices.module';
import { SelectDefaltCustomerComponent } from './market/customers/components/select-defalt-customer/select-defalt-customer.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './market/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectDefaltCustomerComponent,
    MenuComponent
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
