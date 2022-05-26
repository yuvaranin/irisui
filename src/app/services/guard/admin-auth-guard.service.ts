import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    var userAccess = localStorage.getItem('userAccess')
     if (userAccess=="" ||  userAccess==null) {
      this.router.navigate(['/E/Login']);
        return true;
    }
    else if (userAccess=='admin') {
      return true;
    }
    this.router.navigate(['/403']);
    return false;
  }
}
