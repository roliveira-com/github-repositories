import { Router } from '@angular/router'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model'; 
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  user: User;

  constructor(private router: Router, private http: HttpClient){
    this.user = JSON.parse(sessionStorage.getItem('user')) || null;
  }

  login(clientCode): Observable<any> {
    return this.http.post(`https://auth-github-server.herokuapp.com/oauth/accesstoken`, { code: clientCode })
      .pipe(tap(credentials => {
        this.user = { ...credentials };
        this.getUser().subscribe()
      }))
  }

  getUser(): Observable<any> {
    return this.http.get(`https://api.github.com/user`)
      .pipe(tap(user => {
        Object.assign(this.user, { ...this.user, ...user });
        sessionStorage.setItem('user', JSON.stringify(this.user));
      }))
  }


  logout(){
    this.user = null;
    sessionStorage.removeItem('user');
    this.router.navigate(['/'])
  }

}

