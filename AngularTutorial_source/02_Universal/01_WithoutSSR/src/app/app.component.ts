import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//rxJS
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import "rxjs/add/operator/switchMap";
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

    //let url = "https://swapi.co/api/people/1";
    let url = "https://dog.ceo/api/breeds/list/all";
    //let url = "http://localhost:8885/catalog/getallproducts";

    // //sync - 1x - ok data
    this.http
    .get(url)
    .subscribe((data) => {
      console.log("subscribe");
      this.dogs = data;
    })
    // //async 1 - 1x - no data
    // this.dogs = this.http.get(url)
    //               .map((data) => {
    //                 console.log("map");
    //                 //return data;
    //               });
    //async 2 - 1x - ok data
    // this.dogs = this.http.get(url)
    //               .map((data) => {
    //                 console.log("map");
    //                 return data;
    //               });
    // //async 3 - 2x - ok data
    // this.dogs = this.http.get(url)
    //               .switchMap((data) => {
    //                 console.log("map");
    //                 return Observable.of(data);
    //               });
    //async 4 - 2x - ok data
    //this.dogs = this.http.get(url);

    //async 5 - 2x - ok data
    //this.dogs = this.loadData2();
  }

  loadData2(): Observable<any> {
    let url = "http://localhost:8885/catalog/getallproducts";

    return this.http.get(url)
    .map((data) => {
      console.log("map");
      return data;
    });
  }
}
