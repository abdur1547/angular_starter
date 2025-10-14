import { Component, inject } from '@angular/core';
import { ToastService } from '../../core';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
    selector: 'toast',
    imports: [NgFor, AsyncPipe],
    templateUrl: './toast.component.html',
    styleUrl: './toast.component.scss'
})
export class ToastComponent {
  public toastService: ToastService = inject(ToastService);

  remove(index: number) {
    this.toastService.remove(index);
  }
}
