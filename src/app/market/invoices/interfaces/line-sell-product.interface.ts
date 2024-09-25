import { Product } from './product.interface';
import { SellInvoice } from './sell-invoice.interface';

export interface LineSellProduct {
  factura_venta?: SellInvoice;
  amount?: number;
  price?: number;
  product?: Product;
  }