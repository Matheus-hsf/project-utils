import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveScrollIncreaseComponent } from './directive-scroll-increase.component';

const routes: Routes = [
  {
    path: '',
    component: DirectiveScrollIncreaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectiveScrollIncreaseRoutingModule { }
