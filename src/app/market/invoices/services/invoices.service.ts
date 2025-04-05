import { Injectable } from '@angular/core';

import { SaleDetail } from '../interfaces/sale-detail.interface';
import { Product } from '../interfaces/product.interface';
import { Sale } from '../interfaces/sale.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Customer } from '../interfaces/customer.interface';
import { SaleResponse } from '../interfaces/saleResponse.interface';
import { BACKEND_URL } from '../../../config/config';


@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  
  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'})
  private urlEndPoint: string = BACKEND_URL + '/api/sales' 
  
  private timeZone = 'America/Bogota';

  constructor(private http: HttpClient) { }

  public aa: Product = {
    id: 0,
    code: '',
    name: '',
    description: '',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKcGzCaxgQ9nERapwbUJBxxOH-60zG882wvQ&usqp=CAU',
    unit_catalogo: {
      id: 0,
      code: '',
      description: ''
    },
    reorderLevel: 0,
    dimensions: '',
    weight: 0,
    price: 0
  }


  public saleDetail: SaleDetail = {
 
    product: this.aa,

  }

  public sale: Sale = {
    
    customer: {
      id: 1,
      name: '',
      lastName: '',
      document: '',
      phone: '',
      tipo_documento_catalogo_id: null,
      code: '',
      photo: 'https://cdn.prod.website-files.com/5e38f1a8e654dab96f303972/63c84da22b7ea11f3a242b71_Desaf%C3%ADos-de-Servicio-al-Cliente-en-los-Bancos-Cover.png',
      address: '',
      establishment: "",
      
    },
    status: "ACTIVE",
    listInvoiceDetails: [],
    totalAmount: 0
  };

  

  addLineSellProduct( saleDetail: SaleDetail ):void {
    console.log("Main");
    console.log(saleDetail);

    const newLineSellProduct: SaleDetail = { ...saleDetail};

    this.sale.listInvoiceDetails!.push(saleDetail);
    this.sale.totalAmount = this.invoiceTotal();
  }


  invoiceTotal (): number{
    let total = 0;
    for (let index = 0; index < this.sale.listInvoiceDetails!.length; index++) {
      total += this.sale.listInvoiceDetails![index].quantity! * this.sale.listInvoiceDetails![index].pricePerUnit!;
    }
    return total;
  }

  addProduct(product: Product):void {
    this.saleDetail.product = product;
  }

  addCustomer(customer: Customer):void {
    console.log(this.sale);
    this.sale.customer = customer;
    console.log(this.sale);
  }


  saveInvoice(): Observable<Sale> {

    
    console.log(this.sale);
    console.log("Save Sell Invoice");
    this.sale.saleDateTime = this.getCurrentDate();

    const currentDate = new Date().toISOString();
    console.log("hello hello",currentDate)

    console.log("date current",currentDate);
    console.log("date new",new Date);



    return this.http.post<Sale>(this.urlEndPoint, this.sale, {headers: this.httpHeaders}).pipe(
      map((response: any) => {
        console.log("Dentro del servicio");
        console.log(response.Customer as Sale)
        return response.Sale as Sale
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


  getCurrentDate(): Date {
    const currentDate = new Date();
    const offset = -5 * 60 * 60000; // Bogotá offset (-5 horas)
    const bogotaDate = new Date(currentDate.getTime() + offset);
    return bogotaDate; // Enviar esta fecha al backend
  }


  getInvoices(): Observable<SaleResponse> {
      a  : '';
    return this.http.get<SaleResponse>(`${this.urlEndPoint}/page/0`);
  }

  previewInvoicePdf(invoiceId: number): void {
    const url = `${this.urlEndPoint}/${invoiceId}/pdf`;
    window.open(url, '_blank');
}

  downloadInvoicePdf(invoiceId: number): void {
    console.log('downloadInvoicePdf d d d d d d d d d ');
    const url = `${this.urlEndPoint}/${invoiceId}/pdf`;
    this.http.get(url, { responseType: 'blob' }).subscribe((response) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `factura_${invoiceId}.pdf`;
        link.click();
    });
  }


  printInvoice(invoiceId: number): void {
    console.log('Printtttt tt t tt ttt ');
    const url = `${this.urlEndPoint}/${invoiceId}/pdf`;
    this.http.get(url, { responseType: 'blob' }).subscribe(blob => {
      const fileURL = URL.createObjectURL(blob);
      const iframe = document.createElement('iframe');

      iframe.style.display = 'none';
      iframe.src = fileURL;
      document.body.appendChild(iframe);

      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();

      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 5000);
    });
  }

  printInvoiceOld(invoiceId: number): void {
    // Lógica para descargar o imprimir la factura
    const url = `${this.urlEndPoint}/${invoiceId}/download`; // Endpoint para descargar el PDF
    window.open(url, '_blank');
  }


getNextNumberInvoice(): Observable<number> {
return this.http.post<number>('http://localhost:8080/api/sales/next',null, {headers: this.httpHeaders}).pipe(
      map((response: any) => {
        console.log("Dentro del servicio");
        console.log(response as number)
        return response as number
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




getCustomers(): Observable<Customer[]> {
  //return this.http.get<Customer[]>(`${this.urlEndPoint}`);http://localhost:8080/api/clientes
  return this.http.get<Customer[]>('http://localhost:8080/api/clientes');
}
/*    //http://localhost:8080/api/sales/page/0
    console.log("Consulta de facturas");
    const url = `${this.urlEndPoint}page/0`; 
    console.log("url", url);// Ajusta la URL al endpoint correcto
    return this.http.get<any>(url, { headers: this.httpHeaders }).pipe(
      // Puedes procesar la respuesta aquí con `map` si es necesario
    ).subscribe(
      (response) => {
        console.log('Respuesta obtenida:', response); // Usar la respuesta
        retur
      },
      (error) => {
        console.error('Error al obtener datos:', error); // Manejar errores
      }
    );
  }


  map((response: any) => {
    console.log('Facturas obtenidas:', response);
    return response; // Devuelve la respuesta tal cual, o mapea según tus necesidades
  }),
  catchError(e => {
    console.error('Error al obtener facturas:', e);
    return throwError(e); // Manejo de errores
  })
  
  

/*
  saveLineInvoice(): Observable<SaleDetail>{
    console.log("servicio invoice  aa");
    console.log(this.saleDetail);
  
    return this.http.post<SaleDetail>(this.urlEndPoint+'/lines',this.saleDetail, {headers: this.httpHeaders}).pipe(
      map((response: any) => {
        console.log("Dentro del servicio bb");
        console.log(response)
        return response as SaleDetail
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
  }*/


}
