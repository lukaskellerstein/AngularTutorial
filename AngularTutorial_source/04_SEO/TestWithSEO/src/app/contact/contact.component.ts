import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

    title.setTitle('My Contact Page');

    meta.addTags([
      { name: 'author',   content: 'alza.cz'},
      { name: 'keywords', content: 'alza, contactpage, blablabla'},
      { name: 'description', content: 'This is Alza ContactPage!' }
    ]);

  }

  ngOnInit() {
  }

}
