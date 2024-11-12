import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private accessTokenKey = 'access_token';
  private refreshTokenKey = 'refresh_token';
  private cookieService: CookieService = inject(CookieService);

  saveTokens(accessToken: string, refreshToken: string): void {
    this.cookieService.set(this.accessTokenKey, accessToken, {
      secure: true,
      sameSite: 'Strict',
    });

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
