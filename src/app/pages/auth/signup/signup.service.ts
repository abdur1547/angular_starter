import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../../core';
import { Observable } from 'rxjs';
import { SignupResponse, SignupCredentials } from './types';

@Injectable({
  providedIn: 'root',
})
export class SignupService extends BaseHttpService {
  signup(credentials: SignupCredentials): Observable<SignupResponse> {
    return this.post<SignupResponse>('auth/signup', credentials);
  }
}
