import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { AuthService } from 'src/app/data/service/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router

  ) { }

  canActivate(): boolean {

    if (this.auth.stateAuth()) {
      return true;
    } else {
      localStorage.clear();
      this.router.navigateByUrl('/login');
      return false;
    }


  }

}

