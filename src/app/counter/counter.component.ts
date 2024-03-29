 
import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    template: `
        <h1>Counter</h1>

        <h3>Counter : {{counter}} </h3>

        <button (click)="increase(-1)"> -1 </button>
        <button (click)="reset()" >reset</button>
        <button (click)="increase(1)"> +1 </button>

    
    `,
})
 export class CounterComponent {

 
    public counter: number = 10000;

    increase(value: number): void {
        this.counter +=  value;
      }
      
      reset (): void {
        this.counter = 10000;
      }

 }