import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-uid',
	templateUrl: './uid-control.component.html',
	styleUrls: ['./uid-control.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: UidControlComponent,
			multi: true
		}
	]
})
export class UidControlComponent implements OnInit, ControlValueAccessor {

  onChange;
  onTouched;

  writeValue(value) { }

  registerOnChange(fn) { this.onChange = fn; }
  registerOnTouched(fn) { this.onTouched = fn; }



	formArray: FormArray;
	onChange: any;

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.formArray = this.fb.array([]);
		this.formArray.valueChanges.subscribe(value => this.onChange && this.onChange(value));
	}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {}

	setDisabledState(isDisabled: boolean): void {}

	writeValue(value: any): void {
		if (value) {
			this.formArray.patchValue(value, { emitEvent: false });

			while (this.formArray.length > value.length) {
				this.formArray.removeAt(this.formArray.length - 1);
			}

			for (let i = this.formArray.length; i < value.length; i++) {
				this.formArray.insert(i, this.fb.control(value[i]));
			}
		}
	}

	addItem() {
		this.formArray.push(this.fb.control(null));
	}

	deleteItem(i) {
		this.formArray.removeAt(i);
	}
}
