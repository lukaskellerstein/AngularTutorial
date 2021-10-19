import { Action } from '@ngrx/store';
import { ApplicationState } from '../../../states/application.state';

export const IMPORT_SERVER_STATE  = 'Import Server State';

/** This action replaces the whole state in the store with the server state. */
export class ImportServerStateAction implements Action {
  readonly type = IMPORT_SERVER_STATE;

  constructor(public payload: ApplicationState) {
  }
}

export type Actions
  = ImportServerStateAction;
