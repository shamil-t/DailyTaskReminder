import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Vault } from '../types/vault.type';
declare let window: any;
@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.sass'],
})
export class VaultComponent implements OnInit, AfterViewInit {
  @ViewChild('closeModal') cm!: ElementRef;
  @ViewChild('closeToast') ct!: ElementRef;
  vault: Vault;
  vaults: Vault[];
  Toast: any;
  toastText: string = '';
  bootstrap: any;
  constructor() {
    this.vault = { id: 0, name: '', uName: '', password: '' };
    this.vaults = [];
  }

  ngOnInit(): void {
    let _vaults = JSON.parse(localStorage.getItem('vaults')!);
    _vaults ? (this.vaults = _vaults) : (this.vaults = []);
  }

  ngAfterViewInit(): void {
    this.bootstrap = window.bootstrap;
    const toastLiveExample = document.getElementById('liveToast');
    this.Toast = new this.bootstrap.Toast(toastLiveExample);
  }

  addToVault() {
    this.vaults.length > 0
      ? (this.vault.id = this.vaults[this.vaults.length - 1].id + 1)
      : (this.vault.id = 1);
    this.vaults.push(this.vault);
    this.vault = { id: 0, name: '', uName: '', password: '' };
    localStorage.setItem('vaults', JSON.stringify(this.vaults));
    this.cm.nativeElement.click();
  }

  copyPwd(pwd: string) {
    navigator.clipboard.writeText(pwd);
    this.toastText = 'Password copied to clipboard';
    this.Toast.show();
    setTimeout(() => {
      this.ct.nativeElement.click();
    }, 1500);
  }

  delPwd(id: number) {
    console.log(id);

    this.vaults = this.vaults.filter((v) => {
      console.log(v.id);

      return v.id != id;
    });

    console.log(this.vaults);

    localStorage.setItem('vaults', JSON.stringify(this.vaults));
    this.toastText = 'Deleted Password from Vault';
    this.Toast.show();
    setTimeout(() => {
      this.ct.nativeElement.click();
    }, 1500);
  }
}
