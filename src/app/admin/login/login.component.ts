import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginDetails: any = { username: '', password: '' };
  errorMessage: string;
  constructor(private _route: Router) {}

  ngOnInit(): void {}

  onLogin = (loginForm: NgForm) => {
    const username = loginForm.value.username;
    const password = loginForm.value.password;
    console.log(username, password);
    if (username == 'admin') {
      if (password == 'admin') {
        this._route.navigate(['/add']);
      } else {
        this.errorMessage = 'Invaild password';
      }
    } else {
      this.errorMessage = 'username is wrong';
    }
  };
}
