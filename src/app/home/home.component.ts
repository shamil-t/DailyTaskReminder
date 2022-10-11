import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertComponent } from 'src/utils/alert/alert.component';
import { User } from '../types/user.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  @ViewChild('closeModal') cm!: ElementRef;
  @ViewChild(AlertComponent)
  alert: AlertComponent = new AlertComponent();

  manager: {
    name: string;
    email: string;
  } = {
      name: '',
      email: ''
    }
  user: User = {
    name: '',
    email: '',
    empID: 0,
    designation: '',
    manager: this.manager,
  };



  constructor() {
  }

  ngOnInit(): void {
    let _user = JSON.parse(localStorage.getItem('user')!);
    if (_user) this.user = _user;
  }

  ngAfterViewInit(): void {
    // this.alert.show()
  }

  saveData() {
    localStorage.setItem('user', JSON.stringify(this.user));
    this.cm.nativeElement.click();
  }
}
