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

  login(loginForm: any) {
    return this.http.post(`${this.url}/login`, loginForm).subscribe({
      next: (response: any) => {
        console.log(response);
        localStorage.setItem('access_token', response.authToken)
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
        this.route.navigate(['/']);
      },
      error: (error) => {
        console.log(error);
        this.isRegistrationError = true;
      }
    });
  }

  logOut() {
    localStorage.removeItem('access_token');
    this.route.navigate(['/']);
    window.location.reload();
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

}