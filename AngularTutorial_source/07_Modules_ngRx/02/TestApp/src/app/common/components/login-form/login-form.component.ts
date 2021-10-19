import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IdentityService } from '../../services/identity.service';
import { User } from 'src/app/common/entities/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @Output() onSubmit = new EventEmitter<User>();


  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  onSend() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);

    let userLogin = new User();
    userLogin.username = this.loginForm.value.username;
    userLogin.password = this.loginForm.value.password;
    
    this.onSubmit.emit(userLogin);
  }
}
