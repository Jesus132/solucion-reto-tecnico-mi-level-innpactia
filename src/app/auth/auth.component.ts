import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { LogForms } from '../data/schema/auth/auth.model';
import { AuthService } from '../data/service/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  FormLog: FormGroup = new LogForms().FormLog();
  _password = new FormControl();

  logSignUp = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    if (!!localStorage.getItem('login')) {
      this.router.navigateByUrl('/home');
    }
  }

  ngOnInit(): void {
  }

  public login(): void {
    if (this.FormLog.status === "VALID") {
      this.authService.logInUsers(this.FormLog.value).subscribe(
        (res) => {
          if (res.ok) {
            localStorage.setItem('login', 'true');
            this.router.navigateByUrl('/home');
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: res.msg,
              showConfirmButton: false,
              timer: 2000
            });
          }
        },
        (err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.error.msg,
            showConfirmButton: false,
            timer: 2000
          });
        }
      );
    }
  }

  public SignUpUsers(): void {
    if ((this.FormLog.status === "VALID") && (this.FormLog.value.password === this._password.value)) {
      this.authService.SignUpUsers(this.FormLog.value).subscribe(
        (res) => {
          if (res.ok) {
            localStorage.setItem('login', 'true');
            this.router.navigateByUrl('/home');
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: res.msg,
              showConfirmButton: false,
              timer: 2000
            });
          }
        },
        (err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.error.msg,
            showConfirmButton: false,
            timer: 2000
          });
        }
      );
    } else {
      console.log('');
    }
  }

}
