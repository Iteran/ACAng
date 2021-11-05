import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(sessionStorage.getItem('TOKEN')){
      let clone = request.clone({setHeaders: {"Authorization" : "Bearer " + sessionStorage.getItem('TOKEN')}})
      return next.handle(clone);
    }
    return next.handle(request);
  }
}
