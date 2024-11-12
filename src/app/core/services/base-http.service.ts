import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  private http: HttpClient = inject(HttpClient);
  private baseUrl: string = environment.baseUrl;
  private defaultHeaders:HttpHeaders = new HttpHeaders({
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyNSwianRpIjoiODY4YjZjOTNjNzdkMTQyYWVlNWQ4YWE1YTYxZTY5ZTciLCJpYXQiOjE3MzE0MTcyNzQsImV4cCI6MTczMTQyNDQ3NH0.0uOMH5qGCX1b_NRXfQwrMqvf2r2jXSV7-3-j_v-Qi48"
  });

  protected get<T>(url: string) {
    return this.http.get<T>(`${this.baseUrl}/${url}`, {headers: this.defaultHeaders}).pipe(
      catchError(this.handleError)
    );
  }

  protected post<T>(url: string, body: any) {
    return this.http.post<T>(`${this.baseUrl}/${url}`, body, {headers: this.defaultHeaders}).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    // You can customize the error handling logic here
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Backend error
      errorMessage = `Server-side error: ${error.status} - ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
