import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { map } from 'rxjs/operators/map';

import { Product } from '../entities/Product';
import { TestDTO } from '../entities/http/TestDTO';

import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';



@Injectable()
export class CatalogService {
    private serverUrl: string = '';

    private url_getAllProducts: string;
    private url_getProduct: string;
    private url_addProduct: string;
    private url_removeProduct: string;
    private url_updateProduct: string;

    private headers: HttpHeaders;

    constructor(private http: HttpClient) {
        this.serverUrl = "http://localhost:8885";

        this.url_getAllProducts = this.serverUrl + '/catalog/GetAllProducts';
        this.url_getProduct = this.serverUrl + '/catalog/GetProduct';
        this.url_addProduct = this.serverUrl + '/catalog/AddProduct';
        this.url_removeProduct = this.serverUrl + '/catalog/RemoveProduct';
        this.url_updateProduct = this.serverUrl + '/catalog/UpdateProduct';
    }

    private setHeaders() {

        let headerJson = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*'
        }

        this.headers = new HttpHeaders(headerJson);
    }



    /**********************************************/
    /*                  PLACE                     */
    /**********************************************/


    public GetAllProducts(): Observable<TestDTO> {
        console.log('GetAllProducts()');

        this.setHeaders();
        let options = { headers: this.headers };

        return this.http.get(this.url_getAllProducts, options)
            .catch(this.handleError);
    }

    public GetProduct(id: string): Observable<TestDTO> {
        console.log('GetProduct()');

        this.setHeaders();

        let body = {
            id: id
        }

        let options = { headers: this.headers };

        return this.http.post(this.url_getProduct, body, options)
            .catch(this.handleError);
    }


    public AddProduct(item: Product): Observable<TestDTO> {
        console.log('AddProduct()');

        this.setHeaders();

        let body = {
            item: item
        }

        let options = { headers: this.headers };

        return this.http.post(this.url_addProduct, body, options)
            .catch(this.handleError);
    }

    public RemoveProduct(id: string): Observable<TestDTO> {
        console.log('RemoveProduct()');

        this.setHeaders();

        let body = {
            id: id
        }

        let options = { headers: this.headers };

        return this.http.post(this.url_removeProduct, body, options)
            .catch(this.handleError);
    }

    public UpdateProduct(item: Product): Observable<TestDTO> {
        console.log('UpdateProduct()');

        this.setHeaders();

        let body = {
            item: item
        }

        let options = { headers: this.headers };

        return this.http.post(this.url_updateProduct, body, options)
            .catch(this.handleError);
    }




    /**********************************************/
    /*              HELPERS                    */
    /**********************************************/
    // private extractData(res: CellarDTO): any {
    //     return res || {};
    // }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
