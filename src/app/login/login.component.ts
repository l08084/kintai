import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

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

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}

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
    // メールアドレスとパスワードをFirebase Authenticationに渡す
    this.afAuth.auth
      .signInWithEmailAndPassword(
        this.emailControl.value,
        this.passwordControl.value
      )
      // ログインに成功したらホーム画面に遷移する
      .then(user => this.router.navigate(['/home']))
      // ログインに失敗したらエラーメッセージをログ出力
      .catch(error => console.log(error));
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
