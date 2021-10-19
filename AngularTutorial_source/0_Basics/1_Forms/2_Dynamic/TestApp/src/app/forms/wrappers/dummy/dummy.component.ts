import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-dummy',
	templateUrl: './dummy.component.html',
	styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {
	@Input() config: any;
	@Input() formGroup: FormGroup | FormArray;

	constructor() {}

	ngOnInit() {}
}
