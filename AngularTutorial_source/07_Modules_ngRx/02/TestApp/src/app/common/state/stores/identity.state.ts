import { User } from "src/app/common/entities/user";

/** Substates */
export interface IdentityState {
    actual_user: User;
}

export const initialIdentityState: IdentityState = {
    actual_user: null,
  };