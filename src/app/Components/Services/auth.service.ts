import {
  HttpClient,
  HttpErrorResponse,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  URL: string = 'http://localhost:8080/login';

  email: string = 'adminD@gmail.com';
  password: string = '123';

  change: any;
  flag: boolean=false;
  constructor(private http: HttpClient) {}

  login() {
    this.flag=true
    this.change = localStorage.getItem('token');
    return this.http.post(this.URL, {
      email: this.email,
      password: this.password,
    });
  }

  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    return localStorage.removeItem('token');
  }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Interception In Progress'); //SECTION 1
    const token = localStorage.getItem('token');
    req = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token),
    });
    req = req.clone({
      headers: req.headers.set('Content-Type', 'application/json'),
    });
    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error && error.status === 401) {
          console.log('ERROR 401 UNAUTHORIZED');
        }
        const err = error.error.message || error.statusText;
        return throwError(error);
      })
    );
  }
}
