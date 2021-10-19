import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  asdf: string;

  constructor() { }

  ngOnInit() {

    this.asdf = "HELLO";
  }

}
