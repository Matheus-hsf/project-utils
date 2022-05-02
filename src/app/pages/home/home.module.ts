import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectiveScrollIncreaseModule } from '../directive-scroll-increase/directive-scroll-increase.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SimpleCardModule } from 'src/app/components/simple-card/simple-card.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DirectiveScrollIncreaseModule,
    HomeRoutingModule,
    MatToolbarModule,
    SimpleCardModule,
    ],
})
export class HomeModule { }
