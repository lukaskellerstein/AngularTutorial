import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-last-opened-product',
  templateUrl: './last-opened-product.component.html',
  styleUrls: ['./last-opened-product.component.css']
})
export class LastOpenedProductComponent implements OnInit {

  constructor(private shared: SharedService){
    
  }
  
  ngOnInit() {
  }

}
