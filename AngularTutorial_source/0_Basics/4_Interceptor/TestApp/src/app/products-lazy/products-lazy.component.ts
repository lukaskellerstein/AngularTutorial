import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-lazy',
  templateUrl: './products-lazy.component.html',
  styleUrls: ['./products-lazy.component.scss']
})
export class ProductsLazyComponent implements OnInit {

  constructor(private http: HttpClient) {
    console.log('ProductsLazyComponent');
  }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
    .subscribe(o => console.log('ProductsLazyComponent - API', o));
  };

}
