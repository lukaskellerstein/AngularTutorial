import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CareerModule } from './domain/career/career.module';
import { EshopModule } from './domain/eshop/eshop.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CareerModule,
    EshopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
