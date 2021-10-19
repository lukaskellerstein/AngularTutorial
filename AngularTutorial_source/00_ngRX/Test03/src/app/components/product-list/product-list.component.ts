import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';
import { Product } from '../../entities/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  items: Array<Product> = [];

  @Output() onSelect = new EventEmitter<string>();


  constructor() {}
  ngOnInit() {}

  selectProduct(id: string){
    this.onSelect.emit(id)
  }

}
