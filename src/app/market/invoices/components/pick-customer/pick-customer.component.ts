import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pick-customer',
  templateUrl: './pick-customer.component.html',
  styleUrl: './pick-customer.component.css'
})
export class PickCustomerComponent {

   constructor(public matDialogRef: MatDialogRef<PickCustomerComponent>){

    

  }


 

}
