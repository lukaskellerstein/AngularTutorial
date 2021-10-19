import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent {

  @Input() name: string;

  get runChangeDetection() {
    console.log('OnPushComponent - Checking the view');
    return true;
  }

}
