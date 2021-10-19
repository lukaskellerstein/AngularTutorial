import { Injectable } from '@angular/core';
import { Actions } from "@ngrx/effects";

@Injectable()
export class ApplicationEffects {

  constructor(private actions$: Actions) { }

//  @Effect() loadAllProductsEffect$ = this.actions$.pipe(
//         ofType(LOAD_ALL_PRODUCTS),
//         switchMap(() => {

//             let aaa = this.catalogservice.GetAllProducts();
//             return aaa;
        
//         }),
//         map((items) => {

//             return new LoadAllProductsSuccessAction(<Product[]>items.data);

//         }));
   
//   @Effect() saveProductEffect$ = this.actions$.pipe(
//     ofType(SAVE_PRODUCT),
//     map((action: SaveProductAction) => action.payload),
//     switchMap((value) => this.catalogservice.UpdateProduct(value)));


//     @Effect() deleteProductEffect$ = this.actions$.pipe(
//         ofType(DELETE_PRODUCT),
//         map((action: DeleteProductAction) => action.payload),
//         switchMap((value: string) => {

//             return this.catalogservice.RemoveProduct(value)
        
//         }));


}