import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/character/character.component';
import { MainPageComponent } from './pages/app-main.component';


@NgModule({
  exports: [
    ListComponent,
    CharacterComponent,
    MainPageComponent
  ],
  declarations: [
    ListComponent,
    CharacterComponent, 
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
