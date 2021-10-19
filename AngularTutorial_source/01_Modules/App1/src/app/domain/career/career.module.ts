import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CareerComponent } from './career.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavigationComponent, FooterComponent, CareerComponent]
})
export class CareerModule { }
