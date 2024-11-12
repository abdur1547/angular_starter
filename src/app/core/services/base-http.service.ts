import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  private http: HttpClient = inject(HttpClient);
  private baseUrl: string = environment.baseUrl;

  protected get<T>(url: string) {
    return this.http.get<T>(`${this.baseUrl}/${url}`).pipe(
      catchError(this.handleError)
    );
  }

  protected post<T>(url: string, body: any) {
    return this.http.post<T>(`${this.baseUrl}/${url}`, body).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Server-side error: ${error.status} - ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
