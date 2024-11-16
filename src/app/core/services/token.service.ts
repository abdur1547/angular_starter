import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BaseHttpService } from './base-http.service';
import { Observable } from 'rxjs';
import { JWT_REFRESH_TIME } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class TokenService extends BaseHttpService {
  private accessTokenKey = 'access_token';
  private refreshTokenKey = 'refresh_token';
  private intervale: number | null = null;
  private cookieService: CookieService = inject(CookieService);

  autoRefreshAccessToken(): void {
    this.intervale = window.setInterval(() => {
      if (!this.getAccessToken()) return;
      this.refreshAccessToken().subscribe((newAccessToken) =>
        this.saveAccessTokens(newAccessToken.data.access_token)
      );
    }, JWT_REFRESH_TIME);
  }

  refreshAccessToken(): Observable<RefreshAccessTokenResp> {
    const tokenPair = {
      access_token: this.getAccessToken(),
      refresh_token: this.getRefreshToken(),
    };
    return this.post<RefreshAccessTokenResp>('auth/refresh', tokenPair);
  }

  clearTimer(): void {
    if (!this.intervale) return;
    clearInterval(this.intervale);
  }

  saveAccessTokens(accessToken: string): void {
    this.cookieService.set(this.accessTokenKey, accessToken, {
      secure: true,
      sameSite: 'Strict',
    });
  }

  saveRefreshTokens(refreshToken: string): void {
    this.cookieService.set(this.refreshTokenKey, refreshToken, {
      secure: true,
      sameSite: 'Strict',
    });
  }

  getAccessToken(): string | null {
    return this.cookieService.get(this.accessTokenKey) || null;
  }

  getRefreshToken(): string | null {
    return this.cookieService.get(this.refreshTokenKey) || null;
  }

  clearTokens(): void {
    this.cookieService.delete(this.accessTokenKey, '/', '', true, 'Strict');
    this.cookieService.delete(this.refreshTokenKey, '/', '', true, 'Strict');
  }
}

export interface RefreshAccessTokenResp {
  success: boolean;
  data: {
    access_token: string;
  };
}
