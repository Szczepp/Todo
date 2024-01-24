// src/app/register/register.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    // Call the AuthService method for user registration
    this.authService.register(this.username, this.password).subscribe(response => {
      console.log('Registration successful:', response);
      // Redirect to login or any other desired page
      this.router.navigate(['/login']);
    }, error => {
      console.error('Registration failed:', error);
      // Handle registration error (display error message, etc.)
    });
  }
}
