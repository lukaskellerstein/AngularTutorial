import { Component, OnInit } from '@angular/core';
import { Product } from '../../entities/Product';
import { CatalogService } from '../../services/catalog.service';
import { ApplicationState } from '../../states/application.state';
import { Store } from '@ngrx/store';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { SetLastProductAction, LoadAllProductsAction, DeleteProductAction, SaveProductAction } from '../../states/application.actions';
import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  items$: Observable<Product[]>;
  selectedItem$: Observable<Product>;


  constructor(private store: Store<ApplicationState>, private catalogService: CatalogService,
    private readonly transferState: TransferState) { 

    //this.store.dispatch(new LoadAllProductsAction());
  }
  

  ngOnInit() {
    this.items$ = this.store.select(mapProductsFromState);
    this.selectedItem$ = this.store.select(mapSelectedProductFromState);

    this.items$.subscribe((items) => {
      if(items == undefined){
        this.store.dispatch(new LoadAllProductsAction());
      }
    })
  }


  selectProduct(id: string){

    this.items$.subscribe((items) => {
      for (let entry of items) {
        if(entry.id == id){
          this.store.dispatch(new SetLastProductAction(entry))
        }
      }}
    );

  }

  deleteProduct(id: string){
    this.store.dispatch(new DeleteProductAction(id))
  }

  updateProduct(item: Product){
    this.store.dispatch(new SaveProductAction(item))
  }

}


function mapProductsFromState(state: ApplicationState): Array<Product>{
  if(state.secondState == undefined){
    return undefined;
  }
  return state.secondState.allProducts;
}

function mapSelectedProductFromState(state: ApplicationState): Product{
  if(state.firstState == undefined){
    return undefined;
  }
  return state.firstState.lastProduct;
}
