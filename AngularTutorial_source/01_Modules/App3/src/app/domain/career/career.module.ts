import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CareerComponent } from './career.component';
import { SharedModule } from '../../shared/shared.module';

import { CareerRoutingModule } from './career-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CareerRoutingModule
  ],
  declarations: [NavigationComponent, FooterComponent, CareerComponent]
})
export class CareerModule { }
var fekal;