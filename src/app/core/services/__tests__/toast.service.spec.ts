import { TestBed } from '@angular/core/testing';
import { ToastService } from '../toast.service';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with empty toasts array', () => {
    expect(service.toasts()).toEqual([]);
  });

  it('should add toast', () => {
    service.add('Test message');
    expect(service.toasts().length).toBe(1);
    expect(service.toasts()[0].message).toBe('Test message');
    expect(service.toasts()[0].type).toBe('success');
  });

  it('should add toast with custom type', () => {
    service.add('Error message', 'error');
    expect(service.toasts()[0].type).toBe('error');
  });

  it('should remove toast by index', () => {
    service.add('Test message 1');
    service.add('Test message 2');
    expect(service.toasts().length).toBe(2);

    service.remove(0);
    expect(service.toasts().length).toBe(1);
    expect(service.toasts()[0].message).toBe('Test message 2');
  });
});
