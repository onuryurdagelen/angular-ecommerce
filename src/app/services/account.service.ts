import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShopService } from './shop.service';
import { BehaviorSubject, Observable, ReplaySubject, map, of } from 'rxjs';
import { User } from '../models/user';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AccountService extends ShopService{
  http:HttpClient;
  private currentUserSource = new ReplaySubject<User | null>(1);
  currentUser$ = this.currentUserSource.asObservable();


  constructor(httpClient:HttpClient,private router:Router) {
    super(httpClient);
    this.http = httpClient;
  }


  loadCurrentUser(token:string | null){

    if(token == null)
    {
      this.currentUserSource.next(null);
      return of(null);
    }

    let headers = new HttpHeaders();
    headers = headers.set('Authorization',`Bearer ${token}`);

    return this.http.get<User>(this.baseUrl + 'account',{headers}).pipe(
      map((user:any)=> {
        if(user){
          this.currentUserSource.next(user.data);
          return user;
        }
       else {
        return null;
       }
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
    return this.http.get<boolean>(this.baseUrl + 'account/emailExists?email='+email);
  }

}
