import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../states/application.state';
import { Product } from '../../entities/Product';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-last-opened-product',
  templateUrl: './last-opened-product.component.html',
  styleUrls: ['./last-opened-product.component.css']
})
export class LastOpenedProductComponent implements OnInit {

  lastOpened$: Observable<Product>;

  constructor(private store: Store<ApplicationState>) {
    this.lastOpened$ = this.store.select(mapLastProductFromState)
  }
  
  ngOnInit() {
  }

}

function mapLastProductFromState(state: ApplicationState): Product{

  if(state.firstState == undefined){
    return undefined;
  }

  console.log(state.firstState.lastProduct);
  return state.firstState.lastProduct;
}
