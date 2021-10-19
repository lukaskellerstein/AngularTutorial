import { Action } from "@ngrx/store";
import { Product } from "../entities/Product";


export const SET_LAST_PRODUCT = '[Product] Set Last'
export class SetLastProductAction implements Action {
    readonly type = SET_LAST_PRODUCT;
    constructor(public payload: Product){}
}