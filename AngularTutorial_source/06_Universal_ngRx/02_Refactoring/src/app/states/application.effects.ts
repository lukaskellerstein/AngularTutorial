import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { CatalogService } from '../services/catalog.service';
import { LOAD_ALL_PRODUCTS, LoadAllProductsSuccessAction, SAVE_PRODUCT, SaveProductAction, DELETE_PRODUCT, DeleteProductAction } from './application.actions';
import { Product } from '../entities/Product';
import { tap, map, switchMap } from 'rxjs/operators';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { TestDTO } from '../entities/http/TestDTO';

@Injectable()
export class ApplicationEffects {

  constructor(private actions$: Actions, private catalogservice: CatalogService,
                private transferState: TransferState) { }


    NGRX_STATE = makeStateKey('NGRX_STATE');



 @Effect() loadAllProductsEffect$ = this.actions$.pipe(
        ofType(LOAD_ALL_PRODUCTS),
        switchMap(() => {

            console.log("switchMap");

            // //console.log(this.transferState.toJson())
            // const transferedNgRxState = this.transferState.get(this.NGRX_STATE, [] as any);
            // console.log(transferedNgRxState)

            // if (this.transferState.hasKey(this.NGRX_STATE) && transferedNgRxState.secondState != null) {
            //     console.log("HURAY")

            //     let asdfasdf = <Product[]>transferedNgRxState.secondState.allProducts;

            //     console.log(asdfasdf);

            //     let asdf = new TestDTO();
            //     asdf.data = asdfasdf;

            //     return Observable.of(asdf);
            //   }
            //   else {
            //     console.log("CALL API")

                let aaa = this.catalogservice.GetAllProducts();
                return aaa;
              //}

        }),
        map((items: TestDTO) => {

            console.log("map");

            return new LoadAllProductsSuccessAction(<Product[]>items.data);

        }));
   
  @Effect() saveProductEffect$ = this.actions$.pipe(
    ofType(SAVE_PRODUCT),
    map((action: SaveProductAction) => action.payload),
    switchMap((value) => this.catalogservice.UpdateProduct(value)));


    @Effect() deleteProductEffect$ = this.actions$.pipe(
        ofType(DELETE_PRODUCT),
        map((action: DeleteProductAction) => action.payload),
        switchMap((value: string) => {

            return this.catalogservice.RemoveProduct(value)
        
        }));


}