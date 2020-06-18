import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public isLoggedIn = false;
  private auth: AuthService;
  private router: Router;

  constructor(auth: AuthService, router: Router) {
    this.auth = auth;
    this.router = router;
  }

  public ngOnInit() {
    this.auth.auth$.subscribe((data: boolean) => {
      if (data) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
        this.router.navigate(['']);
      }
    });
  }

  public logout(): void {
    this.auth.logout();
  }

}
