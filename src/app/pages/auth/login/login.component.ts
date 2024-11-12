import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private loginService:LoginService = inject(LoginService);
  
  loginForm:FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  login() {
    console.log(this.loginForm.value);
    this.loginService.login();
  };

  jsonReq() {
    this.loginService.jsonReq();
  }
  
  teams() {
    this.loginService.teams();
  }
}
