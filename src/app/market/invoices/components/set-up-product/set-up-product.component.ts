import { Component, EventEmitter, Input, Output, Pipe } from '@angular/core';
import { SaleDetail } from '../../interfaces/sale-detail.interface';
import { Product } from '../../interfaces/product.interface';
import { InvoicesService } from '../../services/invoices.service';

@Component({
  selector: 'app-set-up-product',
  templateUrl: './set-up-product.component.html',
  styleUrl: './set-up-product.component.css'
})
export class SetUpProductComponent {



  @Output()
  public onNewProduct: EventEmitter<SaleDetail> = new EventEmitter();


  @Input()
  public lineSellProduct: SaleDetail = {

  
    product: {
      id: 0,
      code: '',
      name: '',
      description: '',
      photo: 'data:image/jpeg;base64,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',
      unit_catalogo: {
        id: 0,
        code: '',
        description: ''
      },
      reorderLevel: 0,
      dimensions: '',
      weight: 0,
      price: 0
  },
  }




  constructor( public invoicesService: InvoicesService){
    
  }


  setQuantity(value: number) {
      this.lineSellProduct.quantity = value;
    }
    

  addQuantity(number: number) {
    if (this.lineSellProduct.quantity == null) {
      this.lineSellProduct.quantity = number;  
    } else {
      this.lineSellProduct.quantity! += number;  
    }
    
    }
    
    

    addPrice(number: number) {
      this.lineSellProduct.pricePerUnit! += number;
      }
    

  sendProduct():void {
      if(this.lineSellProduct.product!.name.length === 0) return;


      this.lineSellProduct.totalPrice = this.lineSellProduct.pricePerUnit! *this.lineSellProduct.quantity!
      this.onNewProduct.emit({...this.lineSellProduct});

      
      console.log(this.lineSellProduct);

      console.log("Mostrar el Json ");
    
      


      this.lineSellProduct.pricePerUnit = undefined;
      this.lineSellProduct.quantity = undefined;
      this.lineSellProduct.totalPrice = undefined;
      this.lineSellProduct.product =  { 
        id: 0,
        code: '',
        name: '',
        description: '',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKcGzCaxgQ9nERapwbUJBxxOH-60zG882wvQ&usqp=CAU',
        unit_catalogo: {
          id: 0,
          code: '',
          description: ''
        },
        reorderLevel: 0,
        dimensions: '',
        weight: 0,
        price: 0 
  };

  }
  
  formatFraction(value: number): string {
    const fractions: { [key: number]: string } = {
      0.125: '1/8',
      0.25: '1/4',
      0.5: '1/2',
      1: '1'
    };
    return fractions[value] || value.toString();
  }
  

  calculateSubtotal(): number {
    return (this.lineSellProduct.quantity ?? 0) * (this.lineSellProduct.pricePerUnit ?? 0);
  }


  updatePricePerUnit(): void {
    if ((this.lineSellProduct.quantity ?? 0 > 0) && (this.lineSellProduct.totalPrice ?? 0 > 0)) {
      this.lineSellProduct.pricePerUnit = this.lineSellProduct.totalPrice! / this.lineSellProduct.quantity! ;
    }
  }

}


