import { Injectable } from "@angular/core";
import { Product } from "../entities/Product";
import { Observable } from "rxjs/internal/Observable";
import { of } from "rxjs/internal/observable/of";

import * as _ from "lodash";

@Injectable({
  providedIn: "root"
})
export class DataService {
  productDatabase: Product[];

  constructor() {
    this.productDatabase = [
      <Product>{
        id: "1111-1111-1111-1111",
        name: "iPhone",
        price: 1000,
        category: "Mobile phones",
        state: "active"
      },
      <Product>{
        id: "2222-2222-2222-2222",
        name: "Samsung",
        price: 900,
        category: "Mobile phones"
      },
      <Product>{
        id: "3333-3333-3333-3333",
        name: "Google Pixel",
        price: 950,
        category: "Mobile phones"
      },
      <Product>{
        id: "4444-4444-4444-4444",
        name: "Sony",
        price: 200,
        category: "Mobile phones"
      }
    ];
  }

  /**********************************************/
  /*                  PLACE                     */
  /**********************************************/

  public GetAllProducts(): Observable<Product[]> {
    return of(this.productDatabase);
  }

  public GetProduct(id: string): Observable<Product> {
    let result: Product = null;

    for (const item of this.productDatabase) {
      if (item.id === id) {
        result = item;
      }
    }

    return of(result);
  }

  public AddProduct(item: Product): Observable<boolean> {
    this.productDatabase.push(item);

    return of(true);
  }

  public RemoveProduct(id: string): Observable<boolean> {
    let tempDatabase = _.cloneDeep(this.productDatabase);

    tempDatabase = tempDatabase.filter(item => item.id !== id);

    this.productDatabase = tempDatabase;

    return of(true);
  }

  public UpdateProduct(item: Product): Observable<Product> {
    let tempDatabase = _.cloneDeep(this.productDatabase);

    tempDatabase = tempDatabase.filter(item => item.id === item.id);

    console.log(tempDatabase);

    // TODO ------------------------------------------

    return of(item);
  }
}
