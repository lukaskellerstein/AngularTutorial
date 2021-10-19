import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { LabelComponent } from './label/label.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonComponent, LabelComponent],
  exports: [ButtonComponent, LabelComponent]
})
export class MyWidgetsModule { }
