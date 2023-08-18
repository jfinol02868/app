import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interface/character.inteface';


@Injectable({providedIn: 'root'})
export class DbzService {
    
    constructor() { }
    
    public charaters: Character[] = [
        {
            id: uuid(),
            name: 'Andres',
            power: 7500
        },
        {
            id: uuid(),
            name: 'Zombie',
            power: 7000
        },
        {
            id: uuid(),
            name: 'Roberta',
            power: 6500
        },
        {
            id: uuid(),
            name: 'Española que es una quiebra ',
            power: 6000
        }
    ];

    public addCharacter(character: Character) {
        const newCharacter: Character = {id: uuid(), ...character}
        this.charaters.push(newCharacter);
    }
    
    public deleteCharacterById(id:string) {
        this.charaters = this.charaters.filter( charater => charater.id != id);
    }
    
}