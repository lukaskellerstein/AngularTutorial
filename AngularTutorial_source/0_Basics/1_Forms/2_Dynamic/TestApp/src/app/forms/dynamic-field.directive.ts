import { ComponentFactoryResolver, Directive, Input, OnInit, Optional, Type, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormArray, FormGroup, FormGroupDirective } from '@angular/forms';

import { DummyComponent } from './wrappers/dummy/dummy.component';
import { FormInputComponent } from './wrappers/form-input/form-input.component';

const componentMap = {
	string: FormInputComponent,
	// number: FormInputComponent,
	// bool: FormCheckboxComponent,
	// enum: FormSelectComponent,
	// array: FormRepeatComponent,
	// 'object-table': FormObjectTableComponent,
	// object: SubFormComponent,
	// // labels: FormLabelInputComponent,
	// // reference: FormReferenceComponent,
	// oneof: FormOneOfComponent,
	other: DummyComponent
};

@Directive({
	selector: '[vsStellarDynamicField]',
	exportAs: 'dynamicField'
})
export class DynamicFieldDirective implements OnInit {
	@Input() config: any;
	@Input() key: string | number;
	@Input() form: FormGroup | FormArray;

	constructor(
		private containerRef: ViewContainerRef,
		private resolver: ComponentFactoryResolver,
		@Optional() private groupDirective: FormGroupDirective
	) {}

	ngOnInit(): void {
		const componentFactory = this.resolver.resolveComponentFactory(
			this.getComponentType(this.config)
		);
		const componentRef = this.containerRef.createComponent<any>(componentFactory);
		componentRef.instance.formGroup = this.getForm();

		const { wrapper, ...config } = this.config;
		componentRef.instance.config = { ...config, key: this.getKey() };
	}

	private getComponentType(config: any): Type<any> {

		if (!(config.controlType in componentMap)) {
			return componentMap['other'];
			// throw new Error(`No component for controlType ${config.controlType} is not registered`);
		}

		return componentMap[config.controlType];
	}

	getForm(): FormGroup | FormArray {
		return this.form || this.groupDirective.form;
	}

	getFormControl(): AbstractControl {
		return this.getForm().controls[this.config.key];
	}

	getKey(): string | number {
		if (this.key || this.key === 0) {
			return this.key;
		} else {
			return this.config.key;
		}
	}
}
