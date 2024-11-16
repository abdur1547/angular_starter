import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent, NavbarComponent } from './shared';
import { ToastService, TokenService } from './core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  private tokenService: TokenService = inject(TokenService);
  public toastService: ToastService = inject(ToastService);
  count = 0;
  title = 'temp';

  ngOnInit() {
    this.tokenService.autoRefreshAccessToken();
  }

  ngOnDestroy() {
    this.tokenService.clearTimer();
  }

  handleClick() {
    this.toastService.add(`Toast ${this.count}`);
    this.count += 1;
  }
}
