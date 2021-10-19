import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// RxJS
import 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

//ngRX
import { StoreModule } from '@ngrx/store';


// CUSTOM
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CatalogService } from './services/catalog.service';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { LastOpenedProductComponent } from './components/last-opened-product/last-opened-product.component';

//CUSTOM ngRx
import { reducers } from './states/application.reducer';
import { ApplicationState } from './states/application.state';
import { EffectsModule } from '@ngrx/effects';
import { ApplicationEffects } from './states/application.effects';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    HomeComponent,
    ProductsComponent,
    LastOpenedProductComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'test-ng-universal-app'}),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ApplicationEffects])
  ],
  providers: [CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
