import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './common/components/home-page/home-page.component';
import { LoginPageComponent } from './common/containers/login-page/login-page.component';
import { NotFoundPageComponent } from './common/components/not-found-page/not-found-page.component';
import { ErrorPageComponent } from './common/components/error-page/error-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: 'notFound', component: NotFoundPageComponent},
  {path: 'cafe', loadChildren: './modules/cafe-management/cafe-management.module#CafeManagementModule'},
  {path: 'product', loadChildren: './modules/product-management/product-management.module#ProductManagementModule'},
  {path: 'trainings', loadChildren: './modules/trainings-management/trainings-management.module#TrainingsManagementModule'},
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
