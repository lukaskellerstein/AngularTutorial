import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagementRoutingModule } from './product-management-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

import { MyWidgetsModule } from '../../widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    MyWidgetsModule,
    ProductManagementRoutingModule
  ],
  declarations: [DashboardComponent, ListComponent, DetailComponent]
})
export class ProductManagementModule { }
