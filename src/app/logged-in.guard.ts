// logged-in.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private user: UserService, protected router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.user.isLoggedIn()) { return true; }

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}
