import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerSelectorComponent } from '../../../customers/components/customer-selector/customer-selector.component';
import { Product } from '../../interfaces/product.interface';


@Component({
  selector: 'app-invoice-page',
  templateUrl: './invoice-page.component.html',
  styleUrls: ['./invoice-page.component.css']
})
export class InvoicePageComponent {

  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(CustomerSelectorComponent, {
      width: '430px',
      height: '440px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

 onSetProduct(product: Product):void {
//     this.invoicesService.addProduct(product);
//   }

}
}



// import { Component } from '@angular/core';
// import { InvoicesService } from '../../services/invoices.service';
// import { Product } from '../../interfaces/product.interface';
// import { LineSellProduct } from '../../interfaces/line-sell-product.interface';
// import { Customer } from '../../interfaces/customer.interface';
// import { Cliente } from '../../interfaces/cliente.interface';

// @Component({
//   selector: 'app-invoice-page',
//   templateUrl: './invoice-page.component.html',
//   styleUrl: './invoice-page.component.css'
// })
// export class InvoicePageComponent {

//   cliente: Cliente | null = null;

//   openModal() {
//     const name = prompt("Ingrese el nombre del cliente:");
//     const id = prompt("Ingrese el ID del cliente:");

//     if (name && id) {
//       this.cliente = { name, id };
//       console.log('Cliente guardado:', this.cliente);
//     }
//   }


//   constructor( public invoicesService: InvoicesService){
    
//   }

//   get listLineSellProducts(): LineSellProduct[] {
//     return [...this.invoicesService.invoice.listLineSellProduct!];
//   }

//   get lineSellProduct(): LineSellProduct {
//     return this.invoicesService.lineSellProduct;
//   }

//   onNewLineSellProduct(lineSellProduct: LineSellProduct){
//     this.invoicesService.addLineSellProduct(lineSellProduct);
//   }

//   onSetProduct(product: Product):void {
//     this.invoicesService.addProduct(product);
//   }

//   onSetCustomer(customer: Customer):void {
//     this.invoicesService.addCustomer(customer);
//   }

//   get customer(): Customer {
//     return this.invoicesService.invoice.customer!;
//   }





//   guardar() {
//     console.log("Mostrar el Json");

//     this.invoicesService.saveInvoice().subscribe(invoice => {
//       console.log("Dentro del subcribe");
//       console.log(invoice);
//   });
// /*
//     this.clienteService.createCliente(this.cliente).subscribe(
//       cliente => {
//         this.router.navigate(['/clientes'])
//         Swal.fire({
//           icon: 'success',
//           title: `El cliente ${cliente.nombre} ha sido creado con exito!`,
//           showConfirmButton: true,
//           timer: 5000
//         })
//       },
//       err => {
//         this.errores = err.error.errors as string[];
//         console.error("Código del error desde el backend: " + err.status);
//         console.error(err.error.errors);
//       }
//     );
// */

//   }
   
//   cancelar() {
//     throw new Error('Method not implemented.');
//   }
