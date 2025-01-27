import { Product } from './product.interface';
import { Sale } from './sale.interface';

export interface SaleDetail {
  id?: number;
  sale?: Sale;
  product?: Product;
  quantity?: number;
  pricePerUnit?: number;
  totalPrice?: number;
  discount?: number;
  }