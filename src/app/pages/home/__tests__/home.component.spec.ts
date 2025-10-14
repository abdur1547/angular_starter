import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from '../home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize count signal with 0', () => {
    expect(component.count()).toBe(0);
  });

  it('should increment count when clickHandler is called', () => {
    const initialCount = component.count();
    component.clickHandler();
    expect(component.count()).toBe(initialCount + 1);
  });
});
