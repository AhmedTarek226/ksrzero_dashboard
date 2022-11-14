import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../service/admin.service';

@Injectable({
  providedIn: 'root'
})
export class Loginguard implements CanActivate {
  constructor(private router:Router , private admin:AdminService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if(!this.admin.isLogged()){return true}
      else{
        alert("You are already registered")
        this.router.navigate(["dashbord"])
        return false
      }
    
  }
}