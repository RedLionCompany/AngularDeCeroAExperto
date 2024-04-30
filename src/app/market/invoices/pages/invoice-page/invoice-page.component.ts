import { Component } from '@angular/core';
import { InvoicesService } from '../../services/invoices.service';
import { Product } from '../../interfaces/product.interface';
import { LineSellProduct } from '../../interfaces/line-sell-product.interface';

@Component({
  selector: 'app-invoice-page',
  templateUrl: './invoice-page.component.html',
  styleUrl: './invoice-page.component.css'
})
export class InvoicePageComponent {

  constructor( public invoicesService: InvoicesService){
  }

  get listLineSellProducts(): LineSellProduct[] {
    return [...this.invoicesService.invoice.listLineSellProduct];
  }

  get lineSellProduct(): LineSellProduct {
    return this.invoicesService.lineSellProduct;
  }

  onNewLineSellProduct(lineSellProduct: LineSellProduct){
    this.invoicesService.addLineSellProduct(lineSellProduct);
  }

  onSetProduct(product: Product):void {
    this.invoicesService.addProduct(product);
  }

  guardar() {
    console.log("Mostrar el Json");
    this.invoicesService.saveInvoice();
  }
   
  cancelar() {
    throw new Error('Method not implemented.');
  }
    

}
