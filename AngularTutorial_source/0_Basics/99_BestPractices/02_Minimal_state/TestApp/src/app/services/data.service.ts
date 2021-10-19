import { Injectable } from '@angular/core';
import { Product } from '../entities/Product';
import * as _ from 'lodash';

import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { switchMap } from 'rxjs/internal/operators';

@Injectable()
export class DataService {
	private productDb = new BehaviorSubject<Product[]>([]);
	productDatabase$ = this.productDb.asObservable();

	constructor() {
		this.productDb.next([
			<Product>{
				id: '1111-1111-1111-1111',
				name: 'iPhone',
				price: 1000,
				category: 'Mobile phones',
				state: 'active'
			},
			<Product>{
				id: '2222-2222-2222-2222',
				name: 'Samsung',
				price: 900,
				category: 'Mobile phones'
			},
			<Product>{
				id: '3333-3333-3333-3333',
				name: 'Google Pixel',
				price: 950,
				category: 'Mobile phones'
			},
			<Product>{
				id: '4444-4444-4444-4444',
				name: 'Sony',
				price: 200,
				category: 'Mobile phones'
			}
		]);
	}

	/**********************************************/
	/*                  PLACE                     */
	/**********************************************/

	public GetAllProducts(): Observable<Product[]> {
		return this.productDatabase$;
	}

	public GetProduct(id: string): Observable<Product> {
		const result = this.productDatabase$.pipe(
			switchMap(value => {
				return of(value.filter(item => item.id === id));
			})
		);

		return result ? result[0] : of(null);
	}

	public AddProduct(item: Product): Observable<boolean> {
		const tempDb = this.productDb.getValue();
		tempDb.push(item);

		this.productDb.next(tempDb);

		return of(true);
	}

	public RemoveProduct(id: string): Observable<boolean> {
		const tempDb = this.productDb.getValue();

		const changedDb = tempDb.filter(item => item.id !== id);

		this.productDb.next(changedDb);

		return of(true);
	}

	public UpdateProduct(item: Product): Observable<Product> {
		const tempDb = this.productDb.getValue();

		const changedDb = tempDb.filter(itemDb => itemDb.id !== item.id);
		changedDb.push(item);

		this.productDb.next(changedDb);

		return of(item);
	}
}
