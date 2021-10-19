import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Product } from '../entities/Product';
import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() products: Product[];

  @ViewChild("detail") detailComponent: ProductDetailComponent;

  constructor(public service: ProductService) {
    console.log(this.products);
   }

  ngOnInit() {
    console.log(this.products);
    this.service.products = this.products;
  }

  selectProduct(product){
    console.log(product);
    this.service.selectedProduct = product;
    console.log(this.service.selectedProduct);

    this.detailComponent.product = product;
  }
  

}
