import { Injectable } from '@angular/core';
import { Product } from '../entities/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Array<Product>;
  selectedProduct: Product;

  constructor() { }



}
