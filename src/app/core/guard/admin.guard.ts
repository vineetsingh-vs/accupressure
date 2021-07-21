import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!!JSON.parse(localStorage.getItem('user')) && !!state.url.includes('register')
      && JSON.parse(localStorage.getItem('user')).emailId !== 'vineetsingh0393@gmail.com') {
      return this.router.parseUrl('');
    }
    if (!!JSON.parse(localStorage.getItem('user'))) {
      return true;
    }
    return this.router.parseUrl('auth');
  }

}
