import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public charactersList: Character[] = [{
    name: 'Trunck',
    power: 5000
  },
  {
    name: 'Billz',
    power: 10000000
  }];



  onDeleteCharacterN(index : string): void {
    console.log(index);
    this.onDeleteCharacter.emit(index);

  }
}
