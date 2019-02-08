import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private route: Router) { }

  checkAuth(){
    if(!this.auth.user){
      this.route.navigate(['/']);
    }
    return true
  }
 
  canActivate(): boolean {
    return this.checkAuth();
  }

}