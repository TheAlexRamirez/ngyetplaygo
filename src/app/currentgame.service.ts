// game.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

import * as io from 'socket.io-client';

const WS_URL = 'http://localhost:1337/currentgame/subscribe';

@Injectable()
export class CurrentGameService {
  private loggedIn = false;
  private token;
  private api = "http://localhost:1337/currentgame";
  private headers;
  private socket;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
    this.token = localStorage.getItem('auth_token');

  }

  getAll(){
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


  random(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization',`Bearer ${this.token}`);

    return this.http
      .get(
        this.api+'/random',
        { headers }
      );
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(WS_URL);

      console.log(this.socket);

      this.socket.on("connect", () => this.connect());
      //console.log(this.socket);

      this.socket.on('message', (data) => {
        console.log(data);
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  connect(){
    console.log('Connected');
  }

}
