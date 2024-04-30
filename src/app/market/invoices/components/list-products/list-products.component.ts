import { Component, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { LineSellProduct } from '../../interfaces/line-sell-product.interface';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {

  @Input()
  public listLineSellProduct: LineSellProduct[] = [];
  
  //TODO: finish this
  onDeleteCharacterN(code: string) {
    throw new Error('Method not implemented.');
    }

    calculateSubtotal(lineSellProduct: LineSellProduct) {
      if (!lineSellProduct || !lineSellProduct.price || !lineSellProduct.amount) {
        return 0; // Return 0 if price or amount is missing
      }
      return lineSellProduct.price * lineSellProduct.amount;
    }  
  
}
