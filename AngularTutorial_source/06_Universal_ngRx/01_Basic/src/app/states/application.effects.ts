import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { CatalogService } from '../services/catalog.service';
import { LOAD_ALL_PRODUCTS, LoadAllProductsSuccessAction, SAVE_PRODUCT, SaveProductAction, DELETE_PRODUCT, DeleteProductAction } from './application.actions';
import { Product } from '../entities/Product';
import { tap, map, switchMap } from 'rxjs/operators';

@Injectable()
export class ApplicationEffects {

  constructor(private actions$: Actions, private catalogservice: CatalogService) { }

 @Effect() loadAllProductsEffect$ = this.actions$.pipe(
        ofType(LOAD_ALL_PRODUCTS),
        switchMap(() => {

            console.log("switchMap");

            let aaa = this.catalogservice.GetAllProducts();
            return aaa;
        
        }),
        map((items) => {

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