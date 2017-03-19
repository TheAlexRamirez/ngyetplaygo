// user.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class UserService {
  private loggedIn = false;
  private api = "http://localhost:1337";

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(email, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        this.api+'/auth',
        JSON.stringify({ email, password }),
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        console.log(res);
        if (res.user) {
          localStorage.setItem('auth_token', res.token);
          localStorage.setItem('data', JSON.stringify(res.user));

          this.loggedIn = true;
          return true;
        }

        return false;
      });
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('data');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  info(){
    return JSON.parse(localStorage.getItem("data"));
  }
}
