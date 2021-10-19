import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  
  asdf: string;

  constructor() { }

  ngOnInit() {

    this.asdf = "HELLO";
  }

}
