import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public username = '';
  public password = '';
  public success = false;
  public failed = false;
  public isDisabled = false;
  public msg = '';

  constructor() { }

  public ngOnInit(): void {
  }

  public onSubmit(): void {

  }
}
