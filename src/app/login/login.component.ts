import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export class PrivateAPIKeySet {
  constructor(public key: string, public secret: string) {}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  keySet = new PrivateAPIKeySet('', '');
  hide = true;
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.keySet);
  }
}
