import { BrowserModule,
          BrowserTransferStateModule,
          makeStateKey,
          TransferState } from '@angular/platform-browser';
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
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

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
import { ApplicationEffects } from './states/application.effects';


export const NGRX_STATE = makeStateKey('NGRX_STATE');

// make sure you export for AoT
export function stateSetter(reducer) {
  return function(state: any, action: any) {
    if (action.type === 'SET_ROOT_STATE') {
      return action.payload;
    }
    return reducer(state, action);
  };
}

const _metaReducers = [stateSetter];

export const metaReducers = _metaReducers;


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
    BrowserTransferStateModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([ApplicationEffects])
  ],
  providers: [CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  public constructor(
    private readonly transferState: TransferState,
    private readonly store: Store<any>
  ) {
    const isBrowser = this.transferState.hasKey<any>(NGRX_STATE);

    console.log(isBrowser);

    if (isBrowser) {
      this.onBrowser();
    } else {
      this.onServer();
    }
  }
  onServer() {
    this.transferState.onSerialize(NGRX_STATE, () => {
      let state;
      this.store
        .subscribe((saveState: any) => {
          console.log('Set for browser', JSON.stringify(saveState));
          state = saveState;
        })
        .unsubscribe();

      return state;
    });
  }

  onBrowser() {
    const state = this.transferState.get<any>(NGRX_STATE, null);
    this.transferState.remove(NGRX_STATE);
    this.store.dispatch({ type: 'SET_ROOT_STATE', payload: state });
    console.log('Got state from server', JSON.stringify(state));
  }
}
