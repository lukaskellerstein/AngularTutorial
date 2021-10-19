import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CareerComponent } from './career.component';


const careerRoutes: Routes = [
  { path: '', component: CareerComponent, children: [
    { path: 'footer', component: FooterComponent },
    { path: 'navigation', component: NavigationComponent },
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(careerRoutes)
  ],
  exports: [RouterModule]
})
export class CareerRoutingModule { }
