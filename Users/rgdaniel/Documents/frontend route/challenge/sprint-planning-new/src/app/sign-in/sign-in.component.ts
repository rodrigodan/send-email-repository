import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MainNavbarComponent } from '../main-navbar/main-navbar.component';
import { InputTextModule } from 'primeng/inputtext';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MainNavbarComponent,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  constructor(private router: Router) {}
  signIn = new FormGroup({
    emailGroup: new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    }),
    passwordGroup: new FormGroup({
      password: new FormControl('', Validators.required),
    }),
  });

  login() {
    console.log(this.signIn.value);
  }

  subscribe() {
    this.router.navigate(['sign-up']);
  }
}
