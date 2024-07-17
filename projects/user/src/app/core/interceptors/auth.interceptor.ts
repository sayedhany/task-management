import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../../token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenSrv: TokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log(request);
    const token = this.tokenSrv.getToken();
    request = request.clone({
      setHeaders: {
        authorization: `Bearer ${token}`,
      },
    });

    return next.handle(request);
  }
}
