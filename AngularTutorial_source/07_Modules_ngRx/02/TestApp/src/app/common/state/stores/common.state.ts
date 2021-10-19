import { IdentityState, initialIdentityState } from "src/app/common/state/stores/identity.state";

/** Global state */
export interface CommonState {
    identityState: IdentityState;
}


export const initialCommonState: CommonState = {
    identityState: initialIdentityState,
  };