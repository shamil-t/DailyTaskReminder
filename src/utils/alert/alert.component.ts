import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
declare let window: any;
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass']
})
export class AlertComponent implements OnInit {
  @ViewChild('closeToast') ct!: ElementRef;
  @Input() toastText: string = ''
  @Input() showToast: boolean = false
  @Input() alertType: string = 'bg-danger'

  bootstrap: any;
  Toast: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.bootstrap = window.bootstrap;
    const toastLiveExample = document.getElementById('liveToast');
    this.Toast = new this.bootstrap.Toast(toastLiveExample);
    if (this.showToast)
      this.show()
  }

  show() {
    console.log(this.toastText);

    this.Toast.show()
    setTimeout(() => {
      this.ct.nativeElement.click();
    }, 1500);
  }

}
