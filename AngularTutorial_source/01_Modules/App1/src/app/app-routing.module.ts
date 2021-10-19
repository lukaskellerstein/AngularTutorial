import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CareerComponent } from './domain/career/career.component';
import { EshopComponent } from './domain/eshop/eshop.component';

const appRoutes: Routes = [
  { path: '', component: EshopComponent  },
  { path: 'career', component: CareerComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
