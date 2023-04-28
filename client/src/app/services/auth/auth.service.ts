import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  url = 'http://localhost:4000/user';

  isRegistrationError = false;
  isLoginError = false;

  isLoggedIn = false;

  login(loginForm: any) {
    return this.http.post(`${this.url}/login`, loginForm).subscribe({
      next: (response: any) => {
        console.log(response);
        localStorage.setItem('access_token', response.authToken)
        this.route.navigate(['/']);
        this.isLoggedIn = true;
      },
      error: (error) => {
        console.log(error);
        this.isLoginError = true;
      }
    });
  }

  register(registerForm: any) {
    return this.http.post(`${this.url}/register`, registerForm).subscribe({
      next: (response: any) => {
        console.log(response);
        this.route.navigate(['/']);
        this.isLoggedIn = true;
      },
      error: (error) => {
        console.log(error);
        this.isRegistrationError = true;
      }
    });
  }

}