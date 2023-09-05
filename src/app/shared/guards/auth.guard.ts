import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate {

constructor(private accountService:AccountService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map(auth => {
        if(auth) return true
        else{
          this.router.navigate(['/login'],{queryParams: {returnUrl:state.url}})
          return false;
        }
      })
    );
  }
};