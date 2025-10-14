import { Component, inject } from '@angular/core';
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
    styleUrl: './signup.component.scss'
})
export class SignupComponent {
  private signupService: SignupService = inject(SignupService);

  signupForm: FormGroup = new FormGroup({
    email: new FormControl<string>('', [Validators.required]),
    name: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
  });

  signup() {
    console.log(this.signupForm.value);
    this.signupService
      .signup(this.signupForm.value)
      .subscribe((resp) => console.log(resp));
  }
}
