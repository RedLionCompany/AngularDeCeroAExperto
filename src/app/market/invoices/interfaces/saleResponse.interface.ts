import { Sale } from './sale.interface';

export interface SaleResponse {
   content: Sale[];
   totalElements: number;
   totalPages: number;
   size: number;
   number: number;
}