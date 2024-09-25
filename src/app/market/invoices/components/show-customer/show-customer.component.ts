import { Component, Input } from '@angular/core';
import { Customer } from '../../interfaces/customer.interface';
import { Filter } from './filter.component';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrl: './show-customer.component.css'
})
export class ShowCustomerComponent {

  @Input()
  public customer: Customer = {
    name: '',
    code: '',
    photo: '',
    direccion: '',
    establishment: ''
  };
  
  


}

