import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';
const DOGS_KEY = makeStateKey('dogs');

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


  constructor(private http: HttpClient,
              private state: TransferState) {}


  ngOnInit() {
    console.log("OnInit");
  
      this.loadData();
    }
  
    loadData(){
      console.log("loadData");

      //*************************/
      // GET FROM STATE if exist
      //*************************/
      this.dogs = this.state.get(DOGS_KEY, null as any);

      console.log(this.dogs);

      //*************************/
      // OTHERWISE CALL API
      //*************************/
      if (!this.dogs) {
        console.log("CALL API");

        let url = "https://dog.ceo/api/breeds/list/all";

        //sync
        this.http
            .get(url)
            .subscribe((data) => {
              console.log("subscribe");
              this.dogs = data;
              this.state.set(DOGS_KEY, data as any);
            })

        //async
          // this.dogs = this.http.get(url)
          //             .map((data) => {
          //               console.log("map");
          //               return data;
          //             });
        }
    }
}
