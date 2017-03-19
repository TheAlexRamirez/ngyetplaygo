// game.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class GameService {
  private loggedIn = false;
  private token;
  private api = "http://localhost:1337/game";
  private headers;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
    this.token = localStorage.getItem('auth_token');


  }

  getAll() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization',`Bearer ${this.token}`);

    return this.http
      .get(
        this.api+'',
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        return res;
      });
  }

  delete(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization',`Bearer ${this.token}`);

    return this.http
      .delete(
        this.api+'?id='+id,
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        return res;
      });
  }

  add(name,duration,capacity) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization',`Bearer ${this.token}`);

    return this.http
      .post(
        this.api,
        {
            name : name,
            duration : duration,
            capacity : capacity
        },
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        return res;
      });
  }

  update(row) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization',`Bearer ${this.token}`);

    return this.http
      .put(
        this.api+'/'+row.id,
        {
            name : row.name,
            duration : row.duration,
            capacity : row.capacity
        },
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        return res;
      });
  }


}
