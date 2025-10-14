import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { TokenService } from '../../../core/services/token.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private loginService: LoginService = inject(LoginService);
  private tokenService: TokenService = inject(TokenService);

  isLoading = signal(false);
  errorMessage = signal<string | null>(null);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.loginService.login(this.loginForm.value).subscribe({
      next: (tokens) => {
        this.tokenService.saveAccessTokens(tokens.data.access_token);
        this.tokenService.saveRefreshTokens(tokens.data.refresh_token);
        this.isLoading.set(false);
      },
      error: (error) => {
        this.errorMessage.set(error.message || 'Login failed');
        this.isLoading.set(false);
      },
    });
  }

  getTokens() {
    console.log(this.tokenService.getAccessToken());
  }

  clearTokens() {
    console.log(this.tokenService.clearTokens());
  }
}
