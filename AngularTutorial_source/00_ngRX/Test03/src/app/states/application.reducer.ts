// import * as _ from 'lodash';
import { Action, ActionReducerMap } from "@ngrx/store";
import { ApplicationState, FirstState } from "./application.state";

import { SET_LAST_PRODUCT, SetLastProductAction } from './application.actions';
import { Product } from "../entities/Product";


/** Main reducers */
export const reducers: ActionReducerMap<ApplicationState> = {
    firstState: firstReducer
};

/** Subreducers */
export function firstReducer(state: FirstState = null, action: any): FirstState {
    switch (action.type) {

        case SET_LAST_PRODUCT:
            return mapLastProductToState(state, action);

        default:
            return state;
    }

}


function mapLastProductToState(state: FirstState, action: SetLastProductAction): FirstState {
    return {
        ...state,
        lastProduct: action.payload
    };
}
