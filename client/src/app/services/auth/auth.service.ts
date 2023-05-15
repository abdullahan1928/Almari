import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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

  login(loginForm: any) {
    localStorage.setItem('email', loginForm.email)
    return this.http.post(`${this.url}/login`, loginForm).subscribe({
      next: (response: any) => {
        console.log(response);
        localStorage.setItem('access_token', response.authToken)
        localStorage.setItem('userId', response.userId)
        this.route.navigate(['/']);
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
        this.route.navigate(['/login']);
      },
      error: (error) => {
        console.log(error);
        this.isRegistrationError = true;
      }
    });
  }

  logOut() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('userId');
    this.route.navigate(['/']);
    window.location.reload();
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

}