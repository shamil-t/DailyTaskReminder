import { Component, OnInit } from '@angular/core';
import { Login } from '../types/login.type';
import { Register } from '../types/register.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  signUp: boolean = false;

  register: Register = {
    name: '',
    email: '',
    password: '',
    confirm: ''
  }

  login: Login = {
    email: '',
    password: ''
  }


  constructor() { }

  ngOnInit(): void {
  }

  onSignUp() {
    this.signUp = !this.signUp
  }

  onSignInSignUp() {
    if (this.signUp) {
      this.register.email = this.login.email
      this.register.password = this.login.password
      console.log(this.register);
    }

    else
      console.log(this.login);
  }

}
