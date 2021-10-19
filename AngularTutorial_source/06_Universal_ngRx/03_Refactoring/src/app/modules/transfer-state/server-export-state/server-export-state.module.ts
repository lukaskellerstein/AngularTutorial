import { NgModule } from '@angular/core';
import { BEFORE_APP_SERIALIZED } from '@angular/platform-server';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { ApplicationState } from '../../../states/application.state';
import { Store } from '@ngrx/store';
import { TRANSFER_STATE_KEY } from '../browser-import-state/browser-import-state.module';

/**
 * This factory creates a function which outputs NgRx state to the TransferState.
 * Since BEFORE_APP_SERIALIZED does not accepts promises we need to listen for state changes and keep the last state
 * in a local variable. When Angular calls the function made by this factory it synchronously exports the recorded state.
 */
const exportStateFactory = (transferState: TransferState, store: Store<ApplicationState>) => {
  let lastState: ApplicationState;
  const storeSubscription = store.subscribe((newState: ApplicationState) => {
    lastState = newState;
  });
  return () => {
    // omit router state because when it is included ROUTER_NAVIGATION actions are not dispatched in lazy modules
    const exportedState: ApplicationState = {...lastState};
    transferState.set(makeStateKey<ApplicationState>(TRANSFER_STATE_KEY), exportedState);
    console.log("Export state from ngRx state into TransferState");
    console.log(transferState.toJson());
    storeSubscription.unsubscribe();
  };
};

/**
 * ServerExportStateModule appends serialized NgRx state to the rendered HTML. The state is outputted by
 * TransferState as encoded JSON in a script tag.
 */
@NgModule({
  providers: [{
    provide: BEFORE_APP_SERIALIZED,
    useFactory: exportStateFactory,
    deps: [TransferState, Store],
    multi: true
  }]
})
export class ServerExportStateModule {
}
