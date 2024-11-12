import { TestBed } from '@angular/core/testing';

import { GlobalErrorHandlingService } from '../global-error-handling.service';

describe('GlobalErrorHandlingService', () => {
  let service: GlobalErrorHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalErrorHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
