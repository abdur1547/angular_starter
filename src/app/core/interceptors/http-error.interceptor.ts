import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { HttpErrorHandlingService } from '../services';
import { catchError } from 'rxjs';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const httpErrorHandlingService = inject(HttpErrorHandlingService);

  return next(req).pipe(catchError(httpErrorHandlingService.handleError));
};
