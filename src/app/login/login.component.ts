import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;
  public emailControl: FormControl;
  public passwordControl: FormControl;

  constructor(private fb: FormBuilder) {}

  public ngOnInit() {
    this.createForm();
    this.emailControl = this.loginFormGroup.get('email') as FormControl;
    this.passwordControl = this.loginFormGroup.get('password') as FormControl;
  }

  public onSubmit() {
    console.log(this.loginFormGroup.value);
    console.log(this.emailControl.value);
    console.log(this.passwordControl.value);
  }

  public getErrorMessageToEmail() {
    return this.emailControl.hasError('required')
      ? 'You must enter a value'
      : this.emailControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  public getErrorMessageToPassword() {
    return this.passwordControl.hasError('required')
      ? 'You must enter a value'
      : '';
  }

  private createForm() {
    this.loginFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
}
