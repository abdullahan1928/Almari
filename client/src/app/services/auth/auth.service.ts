import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  url = 'http://localhost:3000/user';

  login(email: string, password: string) {
    return this.http.post(`${this.url}/login`, { email, password }).subscribe((response) => {
      console.log(response);
    });
  }

  register(email: string, password: string) {
    return this.http.post(`${this.url}/register`, { email, password });
  }

}