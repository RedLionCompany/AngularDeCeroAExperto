import { LineSellProduct } from './line-sell-product.interface';
import { Payment } from './payment.interface';
import { User } from './user.interface';
import { Trip } from './trip.interface';
import { Customer } from './customer.interface';

export interface SellInvoice {
   id?: number;
   number?: String;
   dateCreate?: Date;
   dateSave?: Date;
   customer?: Customer;
   listLineSellProduct?: LineSellProduct[];
   payment?: Payment[];
   user?: User;  // TODO: this ? SHOULD be REMOVED
   trip?: Trip;
  }

 


