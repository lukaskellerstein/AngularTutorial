import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//rxJS
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  //sync
  dogs: any;
  //async
  //dogs: Observable<any>;


  constructor(private http: HttpClient) {}


  ngOnInit() {
    console.log("OnInit");
  
      this.loadData();
    }
  
    loadData(){
      console.log("loadData");

      let url = "https://dog.ceo/api/breeds/list/all";

      //sync
      this.http
          .get(url)
          .subscribe((data) => {
            console.log("subscribe");
            this.dogs = data;
          })

    //async
      // this.dogs = this.http.get(url)
      //             .map((data) => {
      //               console.log("map");
      //               return data;
      //             });
    }
}
