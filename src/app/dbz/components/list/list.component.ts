import { Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../../interface/character.inteface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteCharacterById: EventEmitter<string> = new EventEmitter(); 

  @Input()
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'Gohan',
      power: 10
    }
  ];

  deleteCharacterById(id?:string): void {
    if(!id ) return;
    this.onDeleteCharacterById.emit(id);
  }
}
