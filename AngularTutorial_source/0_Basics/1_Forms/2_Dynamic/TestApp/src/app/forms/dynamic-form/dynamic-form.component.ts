import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

import { VesFormBuilder } from '../ves-form-builder';

@Component({
	selector: 'vs-stellar-dynamic-form',
	templateUrl: './dynamic-form.component.html',
	styleUrls: ['./dynamic-form.component.scss'],
	exportAs: 'dynamicForm',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: DynamicFormComponent,
			multi: true
		}
	]
})
export class DynamicFormComponent implements OnInit, ControlValueAccessor {
	// protected instanceId: string;

	@Input() fields: any[];

	@Input() data: any;

	formGroup: FormGroup;

	onChangeFn: any;

	@Output('onValueChange')
	onValueChange = new EventEmitter();

	@Output('onStatusChange')
	onStatusChange = new EventEmitter();

	constructor(private fb: VesFormBuilder) {
		// this.instanceId = getRandomUid();
	}

	ngOnInit() {
		this.formGroup = this.fb.fromConfig(this.fields);

		// console.log('form - controls', this.formGroup);
		// console.log('form - value', this.formGroup.value);

		if (this.data) {
			// console.log('form - data', this.data);

			this.formGroup.patchValue(this.data);
		}

		this.formGroup.valueChanges.subscribe(value => {
			if (this.onChangeFn) {
				this.onChangeFn(value);
			}
			this.onValueChange.emit(value);
		});

		this.formGroup.statusChanges.subscribe(value => {
			this.onStatusChange.emit(value);
		});
	}

	registerOnChange(fn: any): void {
		this.onChangeFn = fn;
	}

	registerOnTouched(fn: any): void {}

	setDisabledState(isDisabled: boolean): void {}

	writeValue(value: any): void {
		this.formGroup.patchValue(value || {}, { emitEvent: false });
	}
}
