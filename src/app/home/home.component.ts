import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../types/user.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  @ViewChild('closeModal') cm!: ElementRef;
  user: User;

  constructor() {
    this.user = {
      name: '',
      email: '',
      empID: 0,
      designation: '',
      manager: {
        name: '',
        email: '',
      },
    };
  }

  ngOnInit(): void {
    let _user = JSON.parse(localStorage.getItem('user')!);
    if (_user) this.user = _user;
  }

  saveData() {
    localStorage.setItem('user', JSON.stringify(this.user));
    this.cm.nativeElement.click();
  }
}
