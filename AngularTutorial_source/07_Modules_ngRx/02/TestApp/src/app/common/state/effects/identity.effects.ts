import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { LoginAction, LoginSuccessAction, LoginFailureAction, AllIdentityActions, AllIdentityActionTypes } from '../actions/identity.actions';
import { User } from 'src/app/common/entities/user';
import { IdentityService } from 'src/app/common/services/identity.service';
import { of } from 'rxjs/internal/observable/of';

import { Actions, Effect, ofType } from '@ngrx/effects';


@Injectable()
export class IdentityEffects {

    constructor(private actions$: Actions, private identityservice: IdentityService) { }

    @Effect() loginEffect$ = this.actions$.pipe(
        ofType(AllIdentityActionTypes.LOGIN),
        map((action: LoginAction) => action.payload),
        switchMap((data: User) => {

            let result = false;

            this.identityservice.Login(data.username, data.password).subscribe((value) => {
                result = value;
            });

            if(result){
                return of(data);
            } else {
                return null;
            }
        }),
        map((data: User) => {

            if(data === null){
                return new LoginFailureAction();
            } else {
                return new LoginSuccessAction(data);
            }

        }));


}