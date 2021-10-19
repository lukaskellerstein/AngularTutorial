import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EshopComponent } from './eshop.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EshopComponent, NavigationComponent, FooterComponent]
})
export class EshopModule { }
