import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveScrollIncreaseComponent } from './directive-scroll-increase.component';
import { IncreaseScrollDirectiveModule } from 'src/app/directives/increase-scroll-directive/increase-scroll-directive.module';
import { DirectiveScrollIncreaseRoutingModule } from './directive-scroll-increase-routing.module';



@NgModule({
  declarations: [
    DirectiveScrollIncreaseComponent
  ],
  imports: [
    CommonModule,
    IncreaseScrollDirectiveModule,
    DirectiveScrollIncreaseRoutingModule
  ]
})
export class DirectiveScrollIncreaseModule { }
