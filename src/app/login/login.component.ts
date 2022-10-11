import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertComponent } from 'src/utils/alert/alert.component';
import { AuthService } from '../services/auth.service';
import { Login } from '../types/login.type';
import { Register } from '../types/register.type';
import { UserResponse } from '../types/user_response.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  @ViewChild(AlertComponent)
  toast: AlertComponent = new AlertComponent()

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

  toastText: string = ''


  constructor(private as: AuthService, private router: Router) { }

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
    else {
      console.log(this.login);
      this.as.login(this.login).subscribe((r: any) => {
        if (r.hasOwnProperty('password')) {
          this.toastText = 'Incorrect Password'
          this.toast.show()
        }
        if (r.hasOwnProperty('email')) {
          this.toastText = 'User not Registered Please Sign In'
          this.toast.show()
        }
        if (r.hasOwnProperty('user')) {
          localStorage.setItem('user', JSON.stringify(r.user))
          this.router.navigate(['home'])
        }
      })
    }

  }

}
