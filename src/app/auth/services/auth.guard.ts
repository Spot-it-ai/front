import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  private auth: AuthService;
  private router: Router;

  constructor(router: Router, auth: AuthService) {
    this.auth = auth;
    this.router = router;
  }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.auth.isLoggedIn() || !this.auth.getToken()) {
      return this.router.navigate(['']);
    }

    return this.auth.isLoggedIn();
  }

}
