import { Injectable, signal } from '@angular/core';
import { ToastMessageType, ToastType } from '../types';
import { TOAST_TIMEOUT } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private _toasts = signal<ToastType[]>([]);

  get toasts() {
    return this._toasts.asReadonly();
  }

  add(
    message: string,
    type: ToastMessageType = 'success',
    duration: number = TOAST_TIMEOUT
  ) {
    const newToast: ToastType = { message, duration, type };
    const currentToasts = this._toasts();
    this._toasts.set([...currentToasts, newToast]);

    setTimeout(() => {
      this.remove(0);
    }, duration);
  }

  remove(index: number) {
    const currentToasts = this._toasts();
    const updatedToasts = [...currentToasts];
    updatedToasts.splice(index, 1);
    this._toasts.set(updatedToasts);
  }
}
