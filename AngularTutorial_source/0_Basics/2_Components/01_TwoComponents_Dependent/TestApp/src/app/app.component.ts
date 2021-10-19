import { Component } from '@angular/core';
import { Product } from './entities/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products: Array<Product> = [];

  constructor(){
    this.products.push(<Product>{
      id: "asdf-asfd-asddf-asdfdf-fdfdf",
      name: "Product1",
      price: 100,
      description: "description of Product1"
    })

    this.products.push(<Product>{
      id: "wer-wer-wer-wer-werr",
      name: "Product2",
      price: 150,
      description: "description of Product2"
    })

    this.products.push(<Product>{
      id: "234-23-234-234-234",
      name: "Product3",
      price: 200,
      description: "description of Product3"
    })

    this.products.push(<Product>{
      id: "yui-yui-yu-yui-yuiu",
      name: "Product4",
      price: 250,
      description: "description of Product4"
    })
  }

}
