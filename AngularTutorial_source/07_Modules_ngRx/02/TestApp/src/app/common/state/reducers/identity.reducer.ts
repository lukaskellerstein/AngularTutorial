// import * as _ from 'lodash';
import { IdentityState, initialIdentityState } from "src/app/common/state/stores/identity.state";
import { AllIdentityActions, AllIdentityActionTypes, LoginSuccessAction, LoginFailureAction } from "../actions/identity.actions";


/** Subreducers */
export function identityReducer(state: IdentityState = initialIdentityState, action: AllIdentityActions): IdentityState {
    switch (action.type) {

        case AllIdentityActionTypes.LOGIN_SUCCESS:
            return mapLoginSuccessToState(state, action);

        case AllIdentityActionTypes.LOGIN_FAILURE:
            return mapLoginFailureToState(state, action);

        default:
            return state;
    }
}

function mapLoginSuccessToState(state: IdentityState, action: LoginSuccessAction): IdentityState {
    return {
        ...state,
        actual_user: action.payload
    };
}

function mapLoginFailureToState(state: IdentityState, action: LoginFailureAction): IdentityState {
    return {
        ...state,
        actual_user: null
    };
}

