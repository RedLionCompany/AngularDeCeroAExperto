import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { InvoicesService } from '../../services/invoices.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.component.html',
  styleUrl: './select-product.component.css'
})
export class SelectProductComponent {


  @Output()
  public onSelectProduct: EventEmitter<Product> = new EventEmitter();

  public selectProduct: Product = {
    name: '',
    code: '',
    photo: '',
    price: 0,
    weight: 0,
    id: 0,
    unit_catalogo: {
      id: 0,
      code: '',
      description: ''
    },
    description: ''
  }

  products: Product[] = [];

  constructor(private productsService: ProductsService, private invoicesService: InvoicesService) {
    console.log("PPPPPPPrrrrooooddddduuuccttsss");
    console.log(this.productsService.getProducts());

    this.productsService.getProducts().subscribe(products => this.products = products);

  }

  sendProduct(index: number):void {

    this.selectProduct = this.products[index];
    console.log(this.selectProduct);
    console.log('top 1 a');
    
    if(this.selectProduct.name.length === 0) return;

    this.invoicesService.lineSellProduct.price = this.selectProduct.price;
    this.onSelectProduct.emit({...this.selectProduct});
;console.log('top 1 b')
  }
  
}
