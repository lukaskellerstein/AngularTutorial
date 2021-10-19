import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CatalogService } from '../../services/catalog.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from '../../entities/Product';
import { Observable } from 'rxjs/Observable';
import { TestDTO } from '../../entities/http/TestDTO';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input()
  item: Product;

  @Output() onDelete = new EventEmitter<string>();
  @Output() onSave = new EventEmitter<Product>();


  isEditMode: boolean;

  constructor() { }

  ngOnInit() {
    this.isEditMode = false;
  }

  edit(){
    this.isEditMode = !this.isEditMode;
  }

  save(){
    this.onSave.emit(this.item);
  }

  delete(){
    this.onDelete.emit(this.item.id);
  }


}
