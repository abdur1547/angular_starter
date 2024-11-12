import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../../core/services/base-http.service';
import { LoginCredentials } from './types';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseHttpService {
  login(credentials: LoginCredentials) {
    this.post<any>('auth/signin', credentials).subscribe(value => console.log(value));
  };
}
