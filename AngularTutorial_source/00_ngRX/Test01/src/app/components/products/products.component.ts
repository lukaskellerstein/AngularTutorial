import { Component, OnInit } from '@angular/core';
import { Product } from '../../entities/Product';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  items: Array<Product> = [];
  selectedItem: Product;


  constructor(private catalogService: CatalogService) { }

  ngOnInit() {

    this.catalogService.GetAllProducts().subscribe((value)=> {
      this.items = <Array<Product>>value.data;
    })

  }


  selectProduct(id: string){
    for (let entry of this.items) {
      if(entry.id == id){
        this.selectedItem = entry;
      }
    }
  }

  deleteProduct(id: string){
    this.catalogService.RemoveProduct(id)
    .switchMap((value) => {
      return this.catalogService.GetAllProducts();
    })
    .subscribe((value)=> {
      this.items = <Array<Product>>value.data;
      this.selectedItem = null;
    })
  }

  updateProduct(item: Product){
    this.catalogService.UpdateProduct(item)
      .subscribe((value)=> {
        this.selectedItem = null;
      })
  }

}
