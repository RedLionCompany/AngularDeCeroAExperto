import { Component } from '@angular/core';
import { Customer } from './market/invoices/interfaces/customer.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
onSelectCustomer($event: any) {
throw new Error('Method not implemented.');
}
  public title: string = 'I´m a Super Hero';
  customers: Customer[] = [];

 


}




