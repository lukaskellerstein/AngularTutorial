import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-form-uid',
	templateUrl: './form-uid.component.html',
	styleUrls: ['./form-uid.component.scss']
})
export class FormUidComponent {
	@Input() formGroup: FormGroup;
	@Input() config: any;
}
