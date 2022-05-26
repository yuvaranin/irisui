import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInAuthGuardService implements CanActivate{

  constructor(public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let userAccess = localStorage.getItem('userAccess');
  //   if (userAccess=="" ||  userAccess==null) {
  //     this.router.navigate(['/E/Login']);
  //       return true;
  //   }
  //  else{
  //    switch (userAccess) {
  //      case "admin":
  //       this.router.navigate(['/Admin']);
  //        break;
  //        case "vendor":
  //       this.router.navigate(['/Vendor']);
  //        break;
  //        default:
  //       this.router.navigate(['/E/Login']);
  //        break;
  //    }
  //   return false;
  //  }
  return true;
  }
}
