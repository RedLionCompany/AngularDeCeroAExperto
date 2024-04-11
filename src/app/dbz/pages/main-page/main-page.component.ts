import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';
import { AddCharacterComponent } from '../../components/add-character/add-character.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(public dbzService: DbzService){}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteById({ id: id! });
  }

  onNewCharacter(character: Character){
    this.dbzService.addCharacter(character);
  }

}
