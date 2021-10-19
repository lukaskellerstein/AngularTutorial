import { Component, OnInit } from '@angular/core';
import { State } from '@ngrx/store';
import { CommonState } from 'src/app/common/state/stores/common.state';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent  {




  constructor(private commonState: State<CommonState>){
    
  }


  onSubmit(){
    
  }
}
