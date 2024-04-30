import { Injectable } from '@angular/core';
import { LineSellProduct } from '../interfaces/line-sell-product.interface';
import { Product } from '../interfaces/product.interface';
import { Invoice } from '../interfaces/invoice.interface';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor() { }


  public lineSellProduct: LineSellProduct = {
    product: {
      id: 0,
      name: '',
      code: '',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKcGzCaxgQ9nERapwbUJBxxOH-60zG882wvQ&usqp=CAU',
      
      description: 'string',
      unit_catalogo: {
        id: 0,
        code: '',
        description: ''
      },
      weight: 0,
      price: 0
      }
  }


  public invoice: Invoice = {
    fecha: new Date(),
      customer: {
        name: '',
        code: '',
        photo: '',
        direccion: ''
      },
    listLineSellProduct: [],
    user: {
      id: 0,
      nombre: 'Yesid Gomez',
      codigo: 'YG',
      foto: '',
      rol: 'Administrador'
    }
  };

  
  addLineSellProduct( lineSellProduct: LineSellProduct ):void {
    console.log("Main");
    console.log(lineSellProduct);

    const newLineSellProduct: LineSellProduct = { ...lineSellProduct};

    this.invoice.listLineSellProduct.push(lineSellProduct);
  }

  addProduct(product: Product):void {
    this.lineSellProduct.product = product;
  }


  saveInvoice():number {
    console.log(this.invoice);


    return 1;
  }
    
}
