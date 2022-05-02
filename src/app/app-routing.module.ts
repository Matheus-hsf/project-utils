import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('../app/pages/home/home-routing.module').then(x => x.HomeRoutingModule)
  },
  {
    path: 'directive-increase-scroll',
    loadChildren: () => import('../app/pages/directive-scroll-increase/directive-scroll-increase-routing.module').then( m => m.DirectiveScrollIncreaseRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
