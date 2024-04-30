import { LineSellProduct } from './line-sell-product.interface';
import { Payment } from './payment.interface';
import { Customer } from './customer.interface';
import { User } from './user.interface';

export interface Invoice {
   id?: number;
   number?: number;
   fecha: Date;
   customer: Customer;
   listLineSellProduct: LineSellProduct[];
   payment?: Payment[];
   user: User;
  }