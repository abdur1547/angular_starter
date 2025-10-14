import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { TokenService } from '../../../core/services/token.service';

@Component({
    selector: 'app-login',
    imports: [ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
  private loginService: LoginService = inject(LoginService);
  private tokenService: TokenService = inject(TokenService);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    this.loginService.login(this.loginForm.value).subscribe((tokens) => {
      this.tokenService.saveAccessTokens(tokens.data.access_token);
      this.tokenService.saveRefreshTokens(tokens.data.refresh_token);
    });
  }

  getTokens() {
    console.log(this.tokenService.getAccessToken());
  }

  clearTokens() {
    console.log(this.tokenService.clearTokens());
  }
}
