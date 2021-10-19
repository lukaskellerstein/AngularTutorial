import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { MyWidgetsModule } from '../../widgets/widgets.module';
import { CafeManagementRoutingModule } from './cafe-management-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MyWidgetsModule,
    CafeManagementRoutingModule
  ],
  declarations: [DashboardComponent, ListComponent, DetailComponent]
})
export class CafeManagementModule { }
