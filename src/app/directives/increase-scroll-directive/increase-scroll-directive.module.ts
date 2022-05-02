import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncreaseScrollDirectiveDirective } from './increase-scroll-directive.directive';



@NgModule({
  declarations: [
    IncreaseScrollDirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IncreaseScrollDirectiveDirective
  ]
})
export class IncreaseScrollDirectiveModule { }
