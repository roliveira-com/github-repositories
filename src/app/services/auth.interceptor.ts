import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const auth = this.injector.get(AuthService);

    if (auth.user) {
      const authRequest = request.clone(
        { setHeaders: { 'Authorization': `Bearer ${auth.user.access_token}` } }
      );
      return next.handle(authRequest);
    } else {
      return next.handle(request);
    }

  }

}