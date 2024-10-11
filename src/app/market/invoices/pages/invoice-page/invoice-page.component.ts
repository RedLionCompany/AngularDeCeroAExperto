import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerSelectorComponent } from '../../../customers/components/customer-selector/customer-selector.component';
import { Product } from '../../interfaces/product.interface';
import { PickCustomerComponent } from '../../components/pick-customer/pick-customer.component';
import { InvoicesService } from '../../services/invoices.service';
import { Customer } from '../../interfaces/customer.interface';
import { LineSellProduct } from '../../interfaces/line-sell-product.interface';






@Component({
  selector: 'app-invoice-page',
  templateUrl: './invoice-page.component.html',
  styleUrls: ['./invoice-page.component.css']
})
export class InvoicePageComponent {

  constructor(public _dialog: MatDialog, public invoicesService: InvoicesService) {}



  // variables para manejar los componentes
  isActiveCustomer: number = 0;

  openModal(): void {
    const dialogRef = this._dialog.open(CustomerSelectorComponent, {
      width: '900px',
      // height: '440px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  abrirModal():void {

    this._dialog.open(PickCustomerComponent, {
     width: '400px',     // Ancho del modal
      height: 'auto',     // Ajusta la altura si es necesario
      disableClose: true, // Impide cerrar el modal al hacer clic fuera
      backdropClass: 'custom-backdrop', // Clase personalizada para el fondo
      panelClass: 'custom-dialog-container'
    });
  }

  get customer(): Customer {
    return this.invoicesService.invoice.customer!;
  }

  onSetCustomer(customer: Customer):void {
      console.log("onSetCustomer");
      this.invoicesService.addCustomer(customer);
  }


  onSetActiveCustomer(isActive: number):void {
    this.isActiveCustomer = isActive;
  }

 onSetProduct(product: Product):void {
    this.invoicesService.addProduct(product);
  }
    

  get listLineSellProducts(): LineSellProduct[] {
    return [...this.invoicesService.invoice.listLineSellProduct!];
  }

  get lineSellProduct(): LineSellProduct {
    return this.invoicesService.lineSellProduct;
  }

  onNewLineSellProduct(lineSellProduct: LineSellProduct){
    this.invoicesService.addLineSellProduct(lineSellProduct);
  }


  guardar() {
        console.log("Mostrar el Json");
    
        this.invoicesService.saveInvoice().subscribe(invoice => {
          console.log("Dentro del subcribe");
          console.log(invoice);
      });
    /*
        this.clienteService.createCliente(this.cliente).subscribe(
          cliente => {
            this.router.navigate(['/clientes'])
            Swal.fire({
              icon: 'success',
              title: `El cliente ${cliente.nombre} ha sido creado con exito!`,
              showConfirmButton: true,
              timer: 5000
            })
          },
          err => {
            this.errores = err.error.errors as string[];
            console.error("Código del error desde el backend: " + err.status);
            console.error(err.error.errors);
          }
        );
    */
    
      }
       
      cancelar() {
        throw new Error('Method not implemented.');
      }

}





//   cliente: Cliente | null = null;

//   openModal() {
//     const name = prompt("Ingrese el nombre del cliente:");
//     const id = prompt("Ingrese el ID del cliente:");

//     if (name && id) {
//       this.cliente = { name, id };
//       console.log('Cliente guardado:', this.cliente);
//     }
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
