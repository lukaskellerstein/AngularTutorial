import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-product-count',
	templateUrl: './product-count.component.html',
	styleUrls: ['./product-count.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCountComponent implements OnInit {
	@Input()
	count: number;

	constructor() {}

	ngOnInit() {}

	get runChangeDetection() {
		console.log('Checking the view - ProductCountComponent');
		return true;
	}
}
