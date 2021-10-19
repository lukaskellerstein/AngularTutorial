import { ApplicationState } from '../../../states/application.state';
import { ActionReducer } from '@ngrx/store';
import * as importActions from './import.actions';

export function importServerStateMetaReducer(reducer: ActionReducer<ApplicationState>): ActionReducer<ApplicationState> {
  return function (state: ApplicationState, action: importActions.Actions): ApplicationState {
    switch (action.type) {

      case importActions.IMPORT_SERVER_STATE:
        return action.payload ? {...action.payload} : reducer(state, action);

      default:
        return reducer(state, action);
    }
  };
}
