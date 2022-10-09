import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  showUserMgrBtn: boolean = false
  showUserInfo: boolean = true

  //TODO
  isLogedIn: boolean = false;
  constructor(private router: Router, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.subscribe((v) => {
      let path = this.ar.snapshot.children[0]?.routeConfig?.path
      if (path == 'home')
        this.showUserMgrBtn = true
      if (path == 'login')
        this.showUserInfo = false

    })
    if (this.isLogedIn) {
      //TODO
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['login']);
    }
    let _user = JSON.parse(localStorage.getItem('user')!);
    _user ? (this.user = _user) : '';
  }
}
