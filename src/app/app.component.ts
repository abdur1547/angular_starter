import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent, NavbarComponent } from './shared';
import { ToastService } from './core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public toastService: ToastService = inject(ToastService);
  count = 0;
  title = 'temp';

  handleClick() {
    this.toastService.add(`Toast ${this.count}`);
    this.count += 1;
  }
}
