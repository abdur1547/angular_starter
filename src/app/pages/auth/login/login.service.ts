import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../../core';
import { LoginCredentials, LoginResponce } from './types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseHttpService {
  login(credentials: LoginCredentials): Observable<LoginResponce> {
    return this.post<LoginResponce>('auth/signin', credentials);
  };
}
