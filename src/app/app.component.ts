import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './types/user.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'OrionApp';

  user: User = {
    name: '',
    email: '',
    empID: 0,
    designation: '',
    manager: {
      name: '',
      email: '',
    },
  };

  //TODO
  isLogedIn: boolean = true;
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.isLogedIn) {
      //TODO
      this.router.navigate(['home/reminder']);
    } else {
      this.router.navigate(['login']);
    }
    let _user = JSON.parse(localStorage.getItem('user')!);
    _user ? (this.user = _user) : '';
  }
}
