import { Product } from "../entities/Product";

/** Global state */
export interface ApplicationState {
    firstState: FirstState;
}

/** Substates */
export interface FirstState {
    lastProduct: Product;
}
  
