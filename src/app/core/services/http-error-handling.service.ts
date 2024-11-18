import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlingService {

  handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred';

    if (error.error instanceof ErrorEvent) {
      console.error('Network error occurred:', error.error.message);
      errorMessage = 'A network error occurred. Please check your internet connection and try again.';
    } else {
      console.error(
        `Server error occurred: Status code ${error.status}, ` +
        `Body: ${error.message}`
      );

      switch (error.status) {
        case 400:
          errorMessage = 'Bad Request. Please check your input and try again.';
          break;
        case 401:
          errorMessage = 'Unauthorized. Please log in again.';
          break;
        case 403:
          errorMessage = 'Forbidden. You do not have permission to perform this action.';
          break;
        case 404:
          errorMessage = 'Resource not found. Please try again later.';
          break;
        case 500:
          errorMessage = 'Internal Server Error. Please try again later.';
          break;
        default:
          errorMessage = `Error ${error.status}: ${error.message}`;
          break;
      }
    }

    return throwError(() => new Error(errorMessage));
  }
}