import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from "@angular/core";
import { Product } from "../../entities/Product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  @Input()
  items: Array<Product> = [];

  @Output()
  onSelect = new EventEmitter<string>();

  constructor() {}
  ngOnInit() {}

  selectProduct(id: string) {
    this.onSelect.emit(id);
  }

  get runChangeDetection() {
    console.log("Checking the view - ProductListComponent");
    return true;
  }
}
