import {
    Action,
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
import { User } from "src/app/common/entities/user";


//--------------------------
// ACTIONS
//--------------------------

export class LoginAction implements Action {
    readonly type = AllIdentityActionTypes.LOGIN;
    constructor(public payload: User){}
}

export class LoginSuccessAction implements Action {
    readonly type = AllIdentityActionTypes.LOGIN_SUCCESS;
    constructor(public payload: User){}
}

export class LoginFailureAction implements Action {
    readonly type = AllIdentityActionTypes.LOGIN_FAILURE;
}

export class LogoutAction implements Action {
    readonly type = AllIdentityActionTypes.LOGOUT;
}

export class LogoutSuccessAction implements Action {
    readonly type = AllIdentityActionTypes.LOGOUT_SUCCESS;
}

//--------------------------
// EXPORTED
//--------------------------

export enum AllIdentityActionTypes {
    LOGIN = '[Identity] Login',
    LOGIN_SUCCESS = '[Identity] Login success',
    LOGIN_FAILURE = '[Identity] Login failure',
    LOGOUT = '[Identity] Logout',
    LOGOUT_SUCCESS = '[Identity] Logout success'
};

export type AllIdentityActions = LoginAction | LoginSuccessAction | LoginFailureAction | LogoutAction | LogoutSuccessAction;

