
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../../../invoices/interfaces/customer.interface';

@Component({
  selector: 'app-customer-selector',
  templateUrl: './customer-selector.component.html',
  styleUrls: ['./customer-selector.component.css']
})
export class CustomerSelectorComponent {

  searchTerm: string = ''; // Add searchTerm property
  searchQuery: string = '';

  @Output()
  public onSelectCustomer: EventEmitter<Customer> = new EventEmitter();


  @Output()
  public onActiveCustomer: EventEmitter<number> = new EventEmitter();
  public isActiveCustomer: number = 0;

  currentCustomer: Customer = {
    name: '',
    code: '',
    photo: '',
    direccion: '',
    establishment : ''
  };



  @Input()
  customers: Customer[] = [{
    id: 1,
    name: "Valentina",
    code: "Fruts and Vegue",
    establishment: "Tuti Fruti",
    photo: "https://media.gettyimages.com/id/962792890/es/foto/kiev-ukraine-cristiano-ronaldo-of-real-madrid-lifts-the-uefa-champions-league-trophy-following.jpg?s=612x612&w=0&k=20&c=eCahX6yZc6fJTne5GYHfvVRWSjkSDvlN0ogrKlPJDCw=",
    direccion: "Bogotá"
  },
  {
    id: 13,
    name: "Aroldo",
    code: "1",
    photo: "https://t3.ftcdn.net/jpg/07/89/67/20/240_F_789672005_x5XRq99IfNQYOHgbN5XAy1V9FaN0XyZH.jpg",
    direccion: "Bogotá",
    establishment: "Comando Verde"

  },
  {
    id: 13,
    name: "Chule",
    code: "2",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JAc3QXr3B3lpFvw0DCGUl3_zMQPYpBOQDQ&usqp=CAU",
    direccion: "Segundo Piso 11 con 11",
    establishment: "Chule 2do Piso"
  },
  {
    id: 13,
    name: "Mi Pez",
    code: "3",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2VBt4-d1xCA7DEGZ2HZT7oyGrPlYmBvGuUQ&usqp=CAU",
    direccion: "Gaira",
    establishment: "Mi Pez Gaira"
  },
  {
    id: 13,
    name: "Elvira",
    code: "4",
    photo: "https://t4.ftcdn.net/jpg/03/20/39/89/360_F_320398931_CO8r6ymeSFqeoY1cE6P8dbSGRYiAYj4a.jpg",
    direccion: "Mercado Publico",
    establishment: "Mizar"
  },
  {
    id: 1,
    name: "Valentina",
    code: "Fruts and Vegue",
    establishment: "Tuti Fruti",
    photo: "https://media.gettyimages.com/id/962792890/es/foto/kiev-ukraine-cristiano-ronaldo-of-real-madrid-lifts-the-uefa-champions-league-trophy-following.jpg?s=612x612&w=0&k=20&c=eCahX6yZc6fJTne5GYHfvVRWSjkSDvlN0ogrKlPJDCw=",
    direccion: "Bogotá"
  },
  {
    id: 13,
    name: "Aroldo",
    code: "1",
    photo: "https://t3.ftcdn.net/jpg/07/89/67/20/240_F_789672005_x5XRq99IfNQYOHgbN5XAy1V9FaN0XyZH.jpg",
    direccion: "Bogotá",
    establishment: "Comando Verde"

  },
  {
    id: 13,
    name: "Chule",
    code: "2",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JAc3QXr3B3lpFvw0DCGUl3_zMQPYpBOQDQ&usqp=CAU",
    direccion: "Segundo Piso 11 con 11",
    establishment: "Chule 2do Piso"
  },
  {
    id: 13,
    name: "Mi Pez",
    code: "3",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2VBt4-d1xCA7DEGZ2HZT7oyGrPlYmBvGuUQ&usqp=CAU",
    direccion: "Gaira",
    establishment: "Mi Pez Gaira"
  },
  {
    id: 13,
    name: "Elvira",
    code: "4",
    photo: "https://t4.ftcdn.net/jpg/03/20/39/89/360_F_320398931_CO8r6ymeSFqeoY1cE6P8dbSGRYiAYj4a.jpg",
    direccion: "Mercado Publico",
    establishment: "Mizar"
  }
];
  
  
  

  get filteredCustomers() {
    return this.customers.filter(customer => {
      const searchText = this.searchQuery.toLowerCase();
      return (
        customer.name.toLowerCase().includes(searchText) ||
        customer.direccion.toLowerCase().includes(searchText) ||
        customer.establishment.toLowerCase().includes(searchText)
      );
    });
  }

  selectCustomer(customer: any) {
    console.log('customer selector');
    this.currentCustomer = customer;
    this.onSelectCustomer.emit({...this.currentCustomer});


    this.isActiveCustomer = 0;
    this.onActiveCustomer.emit(this.isActiveCustomer);
  }

}
