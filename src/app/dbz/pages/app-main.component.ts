import { Component, OnInit } from '@angular/core';
import { DbzService } from '../service/dbz.service';
import { Character } from '../interface/character.inteface';


@Component({
    selector: 'dbz-main-page',
    templateUrl: './app-main.component.html'
})

export class MainPageComponent {

    constructor(private dbzService: DbzService) {}

    get characters(): Character[] {
        return [... this.dbzService.charaters];
    }

    public deleteCharacterById(id: string): void {
        this.dbzService.deleteCharacterById(id);
    }

    public addCharacter(character: Character) {
        this.dbzService.addCharacter(character);
    }
}