import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() select = new EventEmitter<any>();

  products = [
    { id: 1, name: 'Papa Rubi', code: 'rubi' },
    { id: 2, name: 'Manzana Roja', code: 'apple' },
    { id: 3, name: 'Arroz Integral', code: 'rice' }
  ];

  selectProduct(product: any) {
    this.select.emit(product);
    this.close.emit(); // Cierra el modal automáticamente después de seleccionar
  }

  onClose() {
    this.close.emit();
  }
}
