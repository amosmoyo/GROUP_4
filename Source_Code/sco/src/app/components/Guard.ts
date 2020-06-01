import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './users/autheticate/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGurds implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
    ) {
  }
  // tslint:disable-next-line: max-line-length
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const isUserAuth = this.auth.getSubjectControl();

    if (!isUserAuth) {
      this.router.navigate(['/user/login']);
    }
    return isUserAuth;
  }

}
