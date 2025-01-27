import { Component, Input } from '@angular/core';
import { Sale } from '../../interfaces/sale.interface';

@Component({
  selector: 'app-report-sale-grid',
  templateUrl: './report-sale-grid.component.html',
  styleUrl: './report-sale-grid.component.css'
})
export class ReportSaleGridComponent {
  @Input() sales: Sale[] = []



  
}
