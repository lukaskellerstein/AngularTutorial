import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonComponent, ImageComponent],
  exports: [ButtonComponent, ImageComponent]
})
export class SharedModule { }
