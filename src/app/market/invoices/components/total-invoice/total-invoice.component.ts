import { Component, Input, input } from '@angular/core';
import { LineSellProduct } from '../../interfaces/line-sell-product.interface';

@Component({
  selector: 'app-total-invoice',
  templateUrl: './total-invoice.component.html',
  styleUrl: './total-invoice.component.css'
})
export class TotalInvoiceComponent {
addPayment() {
throw new Error('Method not implemented.');
}

 private total : number = 0;
  @Input() paymentMethod: string  = 'efectivo'; // Payment method (efectivo, transferencia, nequi)
  @Input() isCreddit: string = 'selecionar'; // Flag indicating if it's a credit sale
 

  receivedAmount!: number; // Initialize receivedAmount
  description: string = ''; // Initialize description

  @Input()
  public listLineSellProduct: LineSellProduct[] = [];




 invoiceTotal (): number{
    this.total = 0;
  for (let index = 0; index < this.listLineSellProduct.length; index++) {
     this.total += this.listLineSellProduct[index].amount! * this.listLineSellProduct[index].price!;
  }

  return this.total

}



  
}
