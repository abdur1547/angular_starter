import { TestBed } from '@angular/core/testing';
import { TokenService } from '../token.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';

describe('TokenService', () => {
  let service: TokenService;
  let cookieService: jasmine.SpyObj<CookieService>;

  beforeEach(() => {
    const cookieServiceSpy = jasmine.createSpyObj('CookieService', [
      'get',
      'set',
      'delete',
    ]);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: CookieService, useValue: cookieServiceSpy }],
    });

    service = TestBed.inject(TokenService);
    cookieService = TestBed.inject(
      CookieService
    ) as jasmine.SpyObj<CookieService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with unauthenticated state', () => {
    expect(service.isAuthenticated()).toBeFalsy();
  });

  it('should update authentication state when saving access token', () => {
    service.saveAccessTokens('test-token');
    expect(cookieService.set).toHaveBeenCalled();
    expect(service.isAuthenticated()).toBeTruthy();
  });

  it('should update authentication state when clearing tokens', () => {
    service.saveAccessTokens('test-token');
    expect(service.isAuthenticated()).toBeTruthy();

    service.clearTokens();
    expect(cookieService.delete).toHaveBeenCalledTimes(2);
    expect(service.isAuthenticated()).toBeFalsy();
  });

  it('should initialize auth state from existing token', () => {
    cookieService.get.and.returnValue('existing-token');
    service.initializeAuthState();
    expect(service.isAuthenticated()).toBeTruthy();
  });
});
