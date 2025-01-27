import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../../interfaces/customer.interface';
import { Filter } from './filter.component';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrl: './show-customer.component.css'
})
export class ShowCustomerComponent {

  


  @Output()
  public onActiveCustomer: EventEmitter<number> = new EventEmitter();
  public isActiveCustomer: number = 0;



  findCustomer() {
    this.isActiveCustomer = 1;
    this.onActiveCustomer.emit(this.isActiveCustomer);
  }

  @Input()
  public customer: Customer = {
    name: '',
    code: '',
    photo: '',
    address: '',
    establishment: '',
    lastName: '',
    document: '',
    tipo_documento_catalogo_id: null,
    phone: ''
  };
  

  


}

