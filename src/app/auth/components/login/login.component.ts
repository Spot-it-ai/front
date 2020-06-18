import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  public username = '';
  public password = '';
  public failed = false;
  public isDisabled = false;
  public msg = '';
  private auth: AuthService;
  private router: Router;

  constructor(router: Router, auth: AuthService) {
    this.auth = auth;
    this.router = router;
  }

  public onSubmit(): void {
    if (this.username.trim() && this.password.trim()) {
      this.auth.login(this.username, this.password)
      .subscribe((res: any) => {
        if (res?.meta?.code === 200 && res?.data?.token) {
          this.failed = false;
          const token = res?.data?.token;
          this.auth.setToken(token);
          this.auth.authSub.next(true);
          this.router.navigate(['/dash']);
        } else {
          this.failed = true;
          this.msg = 'Oops! something went wrong!';
        }
      });
    } else {
      this.failed = true;
      this.msg = 'Oops! you missed username or password!';
    }
  }
}
