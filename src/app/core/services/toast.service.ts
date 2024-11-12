import { Injectable } from '@angular/core';
import { ToastMessageType, ToastType } from '../types';
import { TOAST_TIMEOUT } from '../constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toasts = new BehaviorSubject<ToastType[]>([]);
  toasts$ = this.toasts.asObservable();

  add(message: string, type: ToastMessageType = 'success', duration: number = TOAST_TIMEOUT) {
    const newToast: ToastType = { message, duration, type };
    const currentToasts = this.toasts.getValue();
    this.toasts.next([...currentToasts, newToast]);
    setTimeout(() => {
      this.remove(0);
    }, duration);
  }

  remove(index: number) {
    const currentToasts = this.toasts.getValue();
    currentToasts.splice(index, 1);
    this.toasts.next([...currentToasts]);
  }
}
