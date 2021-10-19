import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../entities/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];
  @Output() selectProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  selectItem(item){
    this.selectProduct.emit(item);
  }

}
