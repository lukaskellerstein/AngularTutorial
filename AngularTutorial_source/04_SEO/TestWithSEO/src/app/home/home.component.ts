import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

    title.setTitle('My Home Page');

    meta.addTags([
      { name: 'author',   content: 'alza.cz'},
      { name: 'keywords', content: 'alza, homepage, blablabla'},
      { name: 'description', content: 'This is Alza Homepage!' }
    ]);

  }

  ngOnInit() {
  }

}
