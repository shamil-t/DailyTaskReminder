import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'OrionApp';

  //TODO
  isLogedIn: boolean = true;
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.isLogedIn) {
      //TODO
      this.router.navigate(['home/notes']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
