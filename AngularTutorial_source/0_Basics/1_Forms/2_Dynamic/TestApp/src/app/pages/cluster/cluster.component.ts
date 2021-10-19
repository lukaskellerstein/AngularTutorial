import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

import { fields } from './fields';

@Component({
	selector: 'app-cluster',
	templateUrl: './cluster.component.html',
	styleUrls: ['./cluster.component.scss']
})
export class ClusterComponent implements OnInit, OnDestroy {
	ngUnsubscribe = new Subject<void>();

	fields = fields;
	data = {
    uid: 'abcd-efgh-ijkl'
  };

	@ViewChild('form', { static: false })
	form: any;

	constructor(
	) {
	}

	ngOnInit() {

	}

	save() {
		const result = this.form.formGroup.value;

		console.log('form - output', result);

	}


	cancel() {
	}

	ngOnDestroy(): void {
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
}
