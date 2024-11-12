import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlingService implements ErrorHandler {

  handleError(error: any): void {
    console.log("service", error);
  }
}
