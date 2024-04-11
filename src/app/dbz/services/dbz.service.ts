import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from  'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {


    public characters: Character[] = [{
        id: uuid(),
        name: 'Vegeta',
        power: 90000
      },
      {
        id: uuid(),
        name: 'Billz',
        power: 10000000
      },
      {
        id: uuid(),
        name: 'Gotten',
        power: 30000
      }];
    
      addCharacter( character: Character ):void {
        console.log("Main");
        console.log(character);

        const newCharacter: Character = {id: uuid(), ...character};

        this.characters.push(newCharacter);
      }
    
      //onDeleteMain( index : number ):void {
      //  this.characters.splice(index, 1);
      //}

      deleteById({ id }: { id: string; }): void {
        this.characters = this.characters.filter(character => character.id !== id);
      }


    constructor() { }
    
}