import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sale } from '../../interfaces/sale.interface';
import { InvoicesService } from '../../services/invoices.service';

@Component({
  selector: 'app-filter-sales',
  templateUrl: './filter-sales.component.html',
  styleUrl: './filter-sales.component.css'
})
export class FilterSalesComponent {
  filterForm: FormGroup;
  isProductModalOpen = false;

  @Output() salesChange: EventEmitter<Sale[]> = new EventEmitter<Sale[]>();

  sales: Sale[] = []

  constructor(private fb: FormBuilder, public invoicesService: InvoicesService ) {
    this.filterForm = this.fb.group({
      startDate: [null],
      endDate: [null],
      product: [''],
      customer: [''],
      invoiceNumber: ['']
    });




    this.invoicesService.getInvoices().subscribe({
      next: (response) => {
        if (response && response.content) {
          this.sales = response.content; // Asignar la lista de content
        } else {
          console.error('No se encontró la propiedad "content" en la respuesta');
        }
      },
      error: (err) => {
        console.error('Error al obtener las facturas:', err);
      },
    });

  }

  // Método para actualizar las ventas y notificar al padre
  updateSales(newSales: Sale[]): void {
    this.sales = newSales;
    this.salesChange.emit(this.sales); // Emitir el valor al padre
  }

  setToday() {
    const today = new Date();
    this.filterForm.patchValue({
      startDate: today,
      endDate: today
    });
  }

  search() {
  
    this.invoicesService.getInvoices().subscribe(facturas => this.sales = facturas.content);
    this.salesChange.emit(this.sales); // Emitir el valor al padre
  
   console.log('Search initiated with filters:', this.filterForm.value);
   console.log('Sales YG:', this.sales);
   console.log('aa');
// TODO  add a method to/that reload the list of invoices
  }

  clearFilters() {
    this.filterForm.reset();
  }


  
isCustomerModalOpen = false;

openProductModal() {
  this.isProductModalOpen = true;
}

closeProductModal() {
  this.isProductModalOpen = false;
}

onProductSelect(product: any) {
  this.filterForm.patchValue({ product: product.name });
  this.closeProductModal();
}

openCustomerModal() {
  this.isCustomerModalOpen = true;
}

closeCustomerModal() {
  this.isCustomerModalOpen = false;
}

onCustomerSelect(customer: any) {
  this.filterForm.patchValue({ customer: customer.name });
  this.closeCustomerModal();
}





}


