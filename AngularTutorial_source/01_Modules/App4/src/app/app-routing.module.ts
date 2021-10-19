import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { CareerComponent } from './domain/career/career.component';
import { EshopComponent } from './domain/eshop/eshop.component';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'career', loadChildren: './domain/career/career.module#CareerModule' },
  { path: 'eshop', component: EshopComponent  }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
