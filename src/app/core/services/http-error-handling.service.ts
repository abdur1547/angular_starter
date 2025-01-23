import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ToastService } from './toast.service';
import { ServerErrorResponse } from '../types';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorHandlingService {
  private toastService = inject(ToastService);

  handleError = (error: HttpErrorResponse): Observable<never> => {
    let errorMessage = 'An unknown error occurred';

    if (error.error instanceof ErrorEvent) {
      console.error('Network error occurred:', error.error.message);
      errorMessage =
        'A network error occurred. Please check your internet connection and try again.';
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
          errorMessage =
            'Forbidden. You do not have permission to perform this action.';
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

    this.toastService.add(this.formatServerErrors(error.error));
    return throwError(() => new Error(errorMessage));
  };

  formatServerErrors = (response: ServerErrorResponse): string => {
    if (!response?.errors || !Array.isArray(response.errors)) {
      return 'An unknown error occurred.';
    }

    const formattedErrors = response.errors
      .map((errorObj) => {
        return Object.entries(errorObj)
          .map(([field, messages]) => {
            const fieldName = field.charAt(0).toUpperCase() + field.slice(1);
            const fieldMessages = Array.isArray(messages)
              ? messages.join(', ')
              : messages;
            return `${fieldName} ${fieldMessages}`;
          })
          .join('\n');
      })
      .join('\n');

    return formattedErrors || 'An unknown error occurred.';
  };
}
