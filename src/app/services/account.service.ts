import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShopService } from './shop.service';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../models/user';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends ShopService{
  http:HttpClient;
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();


  constructor(httpClient:HttpClient,private router:Router) {
    super(httpClient);
    this.http = httpClient;
  }


  loadCurrentUser(token:string){
    let headers = new HttpHeaders();
    headers = headers.set('Authorization',`Bearer ${token}`);

    return this.http.get<User>(this.baseUrl + 'account',{headers}).pipe(
      map((result:any)=> {
        this.currentUserSource.next(result.data);
        return result;
      })
    )
  }

  login(values:any){
    return this.http
    .post<User>(this.baseUrl + 'account/login',values).pipe(
      map((result:any) =>{
        localStorage.setItem('token',result.data.token);
        this.currentUserSource.next(result.data);
        return result;
      })
    )
  }
  register(values:any){
    return this.http
    .post<User>(this.baseUrl + 'account/register',values).pipe(
      map((result:any) =>{
        localStorage.setItem('token',result.data.token);
        this.currentUserSource.next(result.data);
        return result;
      })
    )
  }
  logout(){
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/');
  }
  checkEmailExists(email:string){
    return this.http.get<boolean>(this.baseUrl + 'account/CheckEmailExistsAsync?email='+email);
  }

}
