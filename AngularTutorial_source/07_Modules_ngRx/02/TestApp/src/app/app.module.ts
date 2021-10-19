import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//ngRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

//CUSTOM ngRx
import { reducers } from './state/application.reducer';
import { ApplicationState } from './state/application.state';
import { ApplicationEffects } from './state/application.effects';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyCommonModule } from './common/common.module';
import { CafeManagementModule } from './modules/cafe-management/cafe-management.module';
import { ProductManagementModule } from './modules/product-management/product-management.module';
import { TrainingsManagementModule } from './modules/trainings-management/trainings-management.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyCommonModule,
    CafeManagementModule,
    ProductManagementModule,
    TrainingsManagementModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
