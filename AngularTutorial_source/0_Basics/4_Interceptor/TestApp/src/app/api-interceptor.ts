import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('Interceptor - 1');

    const headers = req.headers
    .set('my-header', 'abcd');
    const authReq = req.clone({ headers });


    console.log('Interceptor - 2', authReq);

    return next.handle(authReq);
  }
}
