import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent, NavbarComponent } from './shared';
import { ToastService, TokenService } from './core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  private tokenService: TokenService = inject(TokenService);
  public toastService: ToastService = inject(ToastService);

  count = signal(0);
  title = signal('temp');

  ngOnInit() {
    this.tokenService.initializeAuthState();
    this.tokenService.autoRefreshAccessToken();
  }

  ngOnDestroy() {
    this.tokenService.clearTimer();
  }

  handleClick() {
    const currentCount = this.count();
    this.toastService.add(`Toast ${currentCount}`);
    this.count.set(currentCount + 1);
  }
}
