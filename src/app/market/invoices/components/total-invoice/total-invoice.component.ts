import { Component, Input, input } from '@angular/core';
import { SaleDetail } from '../../interfaces/sale-detail.interface';

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
  public listLineSellProduct: SaleDetail[] = [];




 invoiceTotal (): number{
    this.total = 0;
    for (let index = 0; index < this.listLineSellProduct.length; index++) {
      this.total += this.listLineSellProduct[index].quantity! * this.listLineSellProduct[index].pricePerUnit!;
    }
    return this.total;
  }


  discount(total: number,  inMoney:number): number {
    if (inMoney >= total) {
      return 0;
    } else {
      return total - inMoney;
    }
  }

  refund(total: number,  inMoney:number): number {
    if (inMoney > total) {
      return (total - inMoney)*-1;
    } else {
      return 0;
    }
  }



  
}
