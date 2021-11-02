import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { NbButton, NbButtonModule, NbIconModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    NbIconModule,
    RouterModule,
    NbButtonModule
  ],
  exports: [ 
    MenuComponent 
  ]
})
export class SharedModule { }
