import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DBZMainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  declarations: [
    DBZMainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
  ], 
  exports: [
    DBZMainPageComponent
  ]
})
export class DbzModule { }
