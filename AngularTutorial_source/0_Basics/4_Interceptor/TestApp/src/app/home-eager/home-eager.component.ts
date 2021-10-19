import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-eager',
  templateUrl: './home-eager.component.html',
  styleUrls: ['./home-eager.component.scss']
})
export class HomeEagerComponent implements OnInit {

  constructor(private http: HttpClient) {
    console.log('HomeEagerComponent');
  }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
    .subscribe(o => console.log('HomeEagerComponent - API', o));
  }

}
