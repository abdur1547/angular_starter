import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  private signupService: SignupService = inject(SignupService);

  isLoading = signal(false);
  successMessage = signal<string | null>(null);
  errorMessage = signal<string | null>(null);

  signupForm: FormGroup = new FormGroup({
    email: new FormControl<string>('', [Validators.required]),
    name: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
  });

  signup() {
    if (this.signupForm.invalid) {
      this.errorMessage.set('Please fill in all required fields');
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.successMessage.set(null);

    console.log(this.signupForm.value);
    this.signupService.signup(this.signupForm.value).subscribe({
      next: (resp) => {
        console.log(resp);
        this.successMessage.set('Account created successfully!');
        this.isLoading.set(false);
      },
      error: (error) => {
        this.errorMessage.set(error.message || 'Signup failed');
        this.isLoading.set(false);
      },
    });
  }
}
