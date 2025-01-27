import { SaleDetail } from './sale-detail.interface';
import { Customer } from './customer.interface';

export interface Sale {
   id?: number;
   number?: String;

   saleDateTime?: Date;
   customer?: Customer;
   totalAmount: number;
   listSalesDetails?: SaleDetail[];
   //payment?: Payment[]; TODO: this is important
  }

 


