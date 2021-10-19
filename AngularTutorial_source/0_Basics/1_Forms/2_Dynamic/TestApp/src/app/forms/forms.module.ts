import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MyMaterialModule } from '../material.module';
import { ObjectTableComponent } from './controls/object-table/object-table.component';
import { OneOfComponent } from './controls/one-of/one-of.component';
import { RepeatComponent } from './controls/repeat/repeat.component';
import { DynamicFieldDirective } from './dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { TestDirective } from './test.directive';
import { VesFormBuilder } from './ves-form-builder';
import { DummyComponent } from './wrappers/dummy/dummy.component';
import { FormCheckboxComponent } from './wrappers/form-checkbox/form-checkbox.component';
import { FormInputComponent } from './wrappers/form-input/form-input.component';
import { FormLinkComponent } from './wrappers/form-link/form-link.component';
import { FormObjectTableComponent } from './wrappers/form-object-table/form-object-table.component';
import { FormOneOfComponent } from './wrappers/form-one-of/form-one-of.component';
import { FormRepeatComponent } from './wrappers/form-repeat/form-repeat.component';
import { FormSelectComponent } from './wrappers/form-select/form-select.component';
import { SubFormComponent } from './wrappers/sub-form/sub-form.component';

@NgModule({
	declarations: [
		DynamicFormComponent,
		DynamicFieldDirective,
		FormInputComponent,
		SubFormComponent,
		DummyComponent,
		FormCheckboxComponent,
		FormSelectComponent,
		FormRepeatComponent,
		RepeatComponent,
		OneOfComponent,
		FormOneOfComponent,
		ObjectTableComponent,
		FormObjectTableComponent,
		FormLinkComponent,
		TestDirective
	],
	imports: [CommonModule, ReactiveFormsModule, MyMaterialModule],
	providers: [VesFormBuilder],
	exports: [DynamicFieldDirective, DynamicFormComponent],
	entryComponents: [
		SubFormComponent,
		DynamicFormComponent,
		FormInputComponent,
		DummyComponent,
		FormCheckboxComponent,
		FormSelectComponent,
		FormRepeatComponent,
		RepeatComponent,
		OneOfComponent,
		FormOneOfComponent,
		ObjectTableComponent,
		FormObjectTableComponent,
		FormLinkComponent
	]
})
export class VesFormsModule {}
