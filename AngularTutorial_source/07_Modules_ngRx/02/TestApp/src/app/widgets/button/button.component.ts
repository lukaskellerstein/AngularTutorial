import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  text: string = "";

  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onInternalClick(event){
    this.onClick.emit(event);
  }

}
