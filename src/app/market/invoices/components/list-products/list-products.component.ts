import { Component, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { SaleDetail } from '../../interfaces/sale-detail.interface';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {

  @Input()
  public listLineSellProduct: SaleDetail[] = [];
  
  //TODO: finish this
  onDeleteCharacterN(code: string) {
    throw new Error('Method not implemented.');
    }

    calculateSubtotal(lineSellProduct: SaleDetail) {
      if (!lineSellProduct || !lineSellProduct.pricePerUnit || !lineSellProduct.quantity) {
        return 0; // Return 0 if price or amount is missing
      }
      return lineSellProduct.pricePerUnit * lineSellProduct.quantity;
    }  
  
}
