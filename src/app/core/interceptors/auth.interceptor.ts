import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../services';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService: TokenService = inject(TokenService);

  const newReq = req.clone({
    headers: req.headers.append('Authorization', tokenService.getAccessToken() ?? ""),
  });

  return next(newReq);
};
