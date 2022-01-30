import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public API: string = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  public logInUsers(auth: any): Observable<any> {
    return this.http.post<any>(`${this.API}auth/login`, auth);
  }

  public SignUpUsers(auth: any): Observable<any> {
    return this.http.post<any>(`${this.API}auth/signup`, auth);
  }

  public stateAuth(): boolean {
    return !!localStorage.getItem('login');
  }

}
