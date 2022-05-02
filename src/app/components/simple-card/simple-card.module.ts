import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleCardComponent } from './simple-card.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    SimpleCardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    SimpleCardComponent
  ]
})
export class SimpleCardModule { }
