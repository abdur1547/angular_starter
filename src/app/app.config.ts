import {
  ApplicationConfig,
  ErrorHandler,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  authInterceptor,
  httpErrorInterceptor,
  GlobalErrorHandlingService,
} from './core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    { provide: ErrorHandler, useClass: GlobalErrorHandlingService },
    provideHttpClient(
      withInterceptors([authInterceptor, httpErrorInterceptor])
    ),
    provideAnimationsAsync(),
  ],
};
