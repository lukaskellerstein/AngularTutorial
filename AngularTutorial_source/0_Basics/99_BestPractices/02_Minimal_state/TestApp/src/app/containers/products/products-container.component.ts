import { Component, OnInit } from '@angular/core';
import { Product } from '../../entities/Product';
import { DataService } from '../../services/data.service';
import { switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-products',
	templateUrl: './products-container.component.html',
	styleUrls: ['./products-container.component.css']
})
export class ProductsComponent implements OnInit {
	items: Array<Product> = [];
	itemsCount = 0;
	selectedItem: Product;

	constructor(private catalogService: DataService) {}

	ngOnInit() {
		this.catalogService.GetAllProducts().subscribe(value => {
			this.items = <Array<Product>>value;
			this.itemsCount = this.items.length;
		});
	}

	selectProduct(id: string) {
		for (const entry of this.items) {
			if (entry.id === id) {
				this.selectedItem = entry;
			}
		}
	}

	deleteProduct(id: string) {
		this.catalogService
			.RemoveProduct(id)
			.pipe(
				switchMap(value => {
					return this.catalogService.GetAllProducts();
				})
			)
			.subscribe(value => {
				this.items = <Array<Product>>value;
				this.itemsCount = this.items.length;
				this.selectedItem = null;
			});
	}

	updateProduct(item: Product) {
		this.catalogService.UpdateProduct(item).subscribe(value => {
			this.selectedItem = null;
		});
	}
}
