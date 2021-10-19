import { Directive, OnInit, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({ selector: '[formControlName]' })
export class TestDirective implements OnInit {
	constructor(@Self() private control: NgControl) {}

	ngOnInit() {
		console.log('directive', this.control.name);
	}
}
