import { TestBed } from '@angular/core/testing';

import { HttpErrorHandlingService } from '../http-error-handling.service';

describe('HttpErrorHandlingService', () => {
  let service: HttpErrorHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpErrorHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
