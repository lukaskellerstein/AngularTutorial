// import * as _ from 'lodash';
// import { Action, ActionReducerMap } from "@ngrx/store";
// import { ApplicationState, FirstState, SecondState } from "./application.state";

// import { SET_LAST_PRODUCT, SetLastProductAction, LOAD_ALL_PRODUCTS, LoadAllProductsAction, LoadAllProductsSuccessAction, LOAD_ALL_PRODUCTS_SUCCESS } from './application.actions';
// import { Product } from "../entities/Product";


/** Main reducers */
export const reducers = {
    // firstState: firstReducer,
    // secondState: secondReducer
};

/** Subreducers */
// export function firstReducer(state: FirstState = null, action: any): FirstState {
//     switch (action.type) {

//         case SET_LAST_PRODUCT:
//             return mapLastProductToState(state, action);

//         default:
//             return state;
//     }
// }
// function mapLastProductToState(state: FirstState, action: SetLastProductAction): FirstState {
//     return {
//         ...state,
//         lastProduct: action.payload
//     };
// }


// export function secondReducer(state: SecondState = null, action: any): SecondState {
//     switch (action.type) {

//         case LOAD_ALL_PRODUCTS_SUCCESS:
//             return mapProductsToState(state, action);

//         default:
//             return state;
//     }
// }

// function mapProductsToState(state: SecondState, action: LoadAllProductsSuccessAction): SecondState {
//     return {
//         ...state,
//         allProducts: action.payload
//     };
// }
