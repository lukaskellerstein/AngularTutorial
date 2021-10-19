import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductsLazyComponent } from './products-lazy.component';



@NgModule({
  declarations: [ProductsLazyComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: ProductsLazyComponent }])
  ]
})
export class ProductsLazyModule { }
