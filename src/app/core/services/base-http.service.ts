import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  private http: HttpClient = inject(HttpClient);
  private baseUrl: string = environment.baseUrl;

  protected get<T>(url: string) {
    return this.http.get<T>(`${this.baseUrl}/${url}`);
  }

  protected post<T>(url: string, body: unknown) {
    return this.http.post<T>(`${this.baseUrl}/${url}`, body);
  }
}
