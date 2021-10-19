import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-alert-view',
  templateUrl: './simple-alert-view.component.html',
  styleUrls: ['./simple-alert-view.component.scss']
})
export class SimpleAlertViewComponent implements OnInit {

  constructor() { }

  @Input() message:string;
  @Input() title:string;
  @Output() onClose = new EventEmitter();
  public visible:boolean = true;

  ngOnInit() {
  }

  public dismiss(){
    this.visible = false;
    this.onClose.emit();
  }

  public show(){
    this.visible = true;
  }  

}
