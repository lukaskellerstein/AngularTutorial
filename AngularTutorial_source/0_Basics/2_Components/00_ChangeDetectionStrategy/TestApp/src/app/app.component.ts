import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestApp';

  lukas: string;
  adam: string;

  setData(){
    this.lukas = "lukas";
    this.adam = "adam";
  }

  setData2(){
    this.lukas = "jirina";
    this.adam = "pavla";
  }
}
