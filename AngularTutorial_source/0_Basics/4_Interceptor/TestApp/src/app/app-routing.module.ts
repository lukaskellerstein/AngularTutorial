import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeEagerComponent } from './home-eager/home-eager.component';


const routes: Routes = [
  { path: 'home', component: HomeEagerComponent },
  { path: 'products', loadChildren: () => import('./products-lazy/products-lazy.module').then(m => m.ProductsLazyModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
