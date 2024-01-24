// src/app/login/login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    // Call the AuthService method for user login
    this.authService.login(this.username, this.password).subscribe(response => {
      console.log('Login successful:', response);
      // Redirect to home or any other desired page
      this.router.navigate(['/home']);
    }, error => {
      console.error('Login failed:', error);
      // Handle login error (display error message, etc.)
    });
  }
}
