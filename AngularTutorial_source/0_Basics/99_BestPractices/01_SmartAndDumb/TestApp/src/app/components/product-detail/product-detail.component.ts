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
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {
  @Input()
  item: Product;

  @Output()
  onDelete = new EventEmitter<string>();
  @Output()
  onSave = new EventEmitter<Product>();

  isEditMode: boolean;

  constructor() {}

  ngOnInit() {
    this.isEditMode = false;
  }

  edit() {
    this.isEditMode = !this.isEditMode;
  }

  save() {
    this.onSave.emit(this.item);
  }

  delete() {
    this.onDelete.emit(this.item.id);
  }

  get runChangeDetection() {
    console.log("Checking the view - ProductDetailComponent");
    return true;
  }
}
