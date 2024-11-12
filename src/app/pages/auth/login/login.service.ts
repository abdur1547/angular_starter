import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../../core/services/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseHttpService {
  login(){
    this.post<any>('auth/signin', {}).subscribe(value => console.log(value));
  };

  jsonReq() {
    this.get<any>('https://jsonplaceholder.typicode.com/todos').subscribe(value => console.log(value));
  }
  
  teams() {
    this.get<any>('http://127.0.0.1:3000/api/v0/teams').subscribe(value => console.log(value));
  }
}
