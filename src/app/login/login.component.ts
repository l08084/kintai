import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';

/**
 * ログイン画面コンポーネント
 *
 * @export
 * @class LoginComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // FormGroup定義
  public loginFormGroup: FormGroup;
  // emailフォームのコントロール定義
  public emailControl: FormControl;
  // passwordフォームのコントロール定義
  public passwordControl: FormControl;

  constructor(private fb: FormBuilder) {}

  public ngOnInit() {
    this.createForm();
    this.emailControl = this.loginFormGroup.get('email') as FormControl;
    this.passwordControl = this.loginFormGroup.get('password') as FormControl;
  }

  /**
   * ログインボタン押下時に呼び出し
   *
   */
  public onSubmit() {
    console.log(this.loginFormGroup.value);
    console.log(this.emailControl.value);
    console.log(this.passwordControl.value);
  }

  /**
   * Eメールフォームにバリデーションエラーメッセージを表示
   *
   */
  public getErrorMessageToEmail() {
    return this.emailControl.hasError('required')
      ? 'You must enter a value'
      : this.emailControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  /**
   * パスワードフォームにバリデーションエラーメッセージを表示
   *
   */
  public getErrorMessageToPassword() {
    return this.passwordControl.hasError('required')
      ? 'You must enter a value'
      : '';
  }

  /**
   * フォーム設定の作成
   *
   */
  private createForm() {
    this.loginFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
}
