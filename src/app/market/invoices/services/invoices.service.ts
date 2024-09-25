import { Injectable } from '@angular/core';
import { LineSellProduct } from '../interfaces/line-sell-product.interface';
import { Product } from '../interfaces/product.interface';
import { SellInvoice } from '../interfaces/sell-invoice.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Customer } from '../interfaces/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  
  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'})
  private urlEndPoint: string = 'http://localhost:8080/api/facturas/ventas'
  

  constructor(private http: HttpClient) { }


  public lineSellProduct: LineSellProduct = {
    factura_venta: {
      id: 1
    },
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


  public invoice: SellInvoice = {
    dateCreate: new Date(),
    number:'369',
    customer: {
      id: 1,
      name: 'Carulla',
      code: 'SuperMarket',
      photo: '',
      direccion: 'Calle 116 con Autopista Bogotá',
      establishment: "Bogotá"
    },
    listLineSellProduct: [],
    user: {
      id: 1,
      name: 'Yesid Gomez',
      code: 'YG',
      photo: '',
      rol: 'Administrador'
    },
    trip: {
      id: 1,
      date_arrive: new Date(),
      truck: {
        id: 0,
        plate: '',
        name: '',
        color: '',
        brand: '',
        type: {
          id: 0,
          code: '',
          description: '',
          name: ''
        }
      },
      code: '',
      photo: '',
      rol: ''
    }
  };

  
  addLineSellProduct( lineSellProduct: LineSellProduct ):void {
    console.log("Main");
    console.log(lineSellProduct);

    const newLineSellProduct: LineSellProduct = { ...lineSellProduct};

    this.invoice.listLineSellProduct!.push(lineSellProduct);
  }

  addProduct(product: Product):void {
    this.lineSellProduct.product = product;
  }

  addCustomer(customer: Customer):void {
    console.log(this.invoice);
    this.invoice.customer = customer;
    console.log(this.invoice);
  }

  saveInvoice(): Observable<SellInvoice> {
    console.log(this.invoice);
    console.log("Save Sell Invoice");
    return this.http.post<SellInvoice>(this.urlEndPoint,this.invoice, {headers: this.httpHeaders}).pipe(
      map((response: any) => {
        console.log("Dentro del servicio");
        console.log(response.cliente as SellInvoice)
        return response.cliente as SellInvoice
      }),
      catchError( e => {


        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
       // Swal.fire(e.error.mensaje, e.error.error , 'error');
        return throwError(e);
      })
    );
  }



  saveLineInvoice(): Observable<LineSellProduct>{
    return this.http.post<LineSellProduct>(this.urlEndPoint+'/lineas',this.lineSellProduct, {headers: this.httpHeaders}).pipe(
      map((response: any) => {
        console.log("Dentro del servicio");
        console.log(response)
        return response as LineSellProduct
      }),
      catchError( e => {


        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
       // Swal.fire(e.error.mensaje, e.error.error , 'error');
        return throwError(e);
      })
    );
  }


}
