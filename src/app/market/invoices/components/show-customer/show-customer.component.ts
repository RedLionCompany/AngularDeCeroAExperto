import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../../interfaces/customer.interface';
import { Filter } from './filter.component';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrl: './show-customer.component.css'
})
export class ShowCustomerComponent {

  public factNumber: number = 23456;


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
    direccion: '',
    establishment: ''
  };
  

  


}

