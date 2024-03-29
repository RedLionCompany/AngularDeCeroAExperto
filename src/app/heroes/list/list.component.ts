import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  public heroNames: string[] = ["Worder Woman", "Superman", "Batman", "Spiderman", "Hulk"];
  public heroeDeleted?: string;

  deleteHero():void{
    this.heroeDeleted = this.heroNames.pop();
  }
}
