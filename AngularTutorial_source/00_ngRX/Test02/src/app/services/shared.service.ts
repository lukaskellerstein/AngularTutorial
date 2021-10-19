import { Injectable } from '@angular/core';
import { Product } from '../entities/Product';

@Injectable()
export class SharedService {

  constructor() { }

  lastProduct: Product;

}
