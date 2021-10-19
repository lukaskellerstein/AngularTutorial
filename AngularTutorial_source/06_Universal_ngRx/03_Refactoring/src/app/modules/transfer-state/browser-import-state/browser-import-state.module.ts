import { APP_INITIALIZER, NgModule } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../../states/application.state';
import { ImportServerStateAction } from './import.actions';

/** Key is used to store the server state in the TransferState. */
export const TRANSFER_STATE_KEY = 'my_state';

/**
 * This factory creates a function that takes the serialized state from the TransferState and inserts it into the store.
 */
export function importStateFactory(store: Store<ApplicationState>, transferState: TransferState) {
  return function importState() {
    console.log("Import state from TransferState into ngRx state");
    console.log(transferState.toJson());
    const serverState = transferState.get(makeStateKey<ApplicationState>(TRANSFER_STATE_KEY), null);
    store.dispatch(new ImportServerStateAction(serverState));
  };
}

/**
 * BrowserImportStateModule takes the state serialized by the server in the script tag
 * and inserts it into the NgRx store by dispatching an IMPORT_SERVER_STATE action during initialization of the app.
 * If serialized JSON is not present in the script tag, no import is performed.
 */
@NgModule({
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: importStateFactory,
    deps: [Store, TransferState],
    multi: true
  }]
})
export class BrowserImportStateModule {
}
