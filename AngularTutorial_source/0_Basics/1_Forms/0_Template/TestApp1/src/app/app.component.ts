import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  myName: string;
  myEmail: string;

  constructor(){

  }

  onSubmit(){
    console.log(this.myName);
    console.log(this.myEmail);
  }
}
