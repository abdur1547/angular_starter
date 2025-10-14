import { Component, inject } from '@angular/core';
import { ToastService } from '../../core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'toast',
  imports: [NgFor],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent {
  public toastService: ToastService = inject(ToastService);

  get toasts() {
    return this.toastService.toasts();
  }

  remove(index: number) {
    this.toastService.remove(index);
  }
}
