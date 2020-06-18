import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(http: HttpClient) {
    this.http = http;
  }

  private http: HttpClient;
  private loggedIn = false;
  private token: string;
  private readonly LOGIN_ENDPOINT: string = '/api/login';

  public setLogged;

  public login(username: string, password: string): Observable<any> {
    const url = environment.hostUrl + this.LOGIN_ENDPOINT;
    if (username.trim() && password.trim()) {
      const body = {
        username: username.trim(),
        password: password.trim(),
      };
      return this.http.post(url, body);
    }
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }

  public setLoggedIn(logged: boolean): void {
    this.loggedIn = logged;
  }

  public getToken(): string {
    return this.token;
  }

  public setToken(token: string): void {
    this.loggedIn = true;
    this.token = token;
  }
}