import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastComponent } from '../toast.component';
import { ToastService } from '../../../core';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;
  let toastService: ToastService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    toastService = TestBed.inject(ToastService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get toasts from service signal', () => {
    toastService.add('Test toast');
    expect(component.toasts.length).toBe(1);
    expect(component.toasts[0].message).toBe('Test toast');
  });

  it('should call remove on service when remove is called', () => {
    spyOn(toastService, 'remove');
    component.remove(0);
    expect(toastService.remove).toHaveBeenCalledWith(0);
  });
});
