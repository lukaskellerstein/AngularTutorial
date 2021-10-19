import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class VesFormBuilder {
	constructor(private fb: FormBuilder) {}

	fromConfig(fields: any[]): FormGroup {
		const controlsConfig = {};
		for (const field of fields) {
			controlsConfig[field.key] = this.fb.control(null);
		}

		return this.fb.group(controlsConfig);
	}
}
