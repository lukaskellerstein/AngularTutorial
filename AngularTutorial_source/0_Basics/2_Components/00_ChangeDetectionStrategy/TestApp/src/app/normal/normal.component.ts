import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss']
})
export class NormalComponent {

  @Input() name: string;

  get runChangeDetection() {
    console.log('NormalComponent - Checking the view');
    return true;
  }
  
}
