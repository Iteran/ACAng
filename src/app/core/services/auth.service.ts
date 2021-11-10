import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'TOKEN';
  private readonly url : string = "https://localhost:44350/api/Auth";
  public token!: any
  isAdmin! : boolean
  _currentUser? : User
  myUser? : User
  set currentUser(value : User ) {
    this._currentUser = value
    this.emitUser()
  }
  
  userSub : Subject<User> = new Subject<User>()

  emitUser() : void {
    console.log("test")
    this.userSub.next(this._currentUser)
  }

  public get user(): User | null{
    if(!this.token) return null;
    return jwt_decode<User>(this.token);
  }
  constructor(private httpclient : HttpClient, private router : Router) {
    // this.token = sessionStorage.getItem(this.TOKEN_KEY);
   }
   login(data : Login) : Observable<void> {
     return this.httpclient.post<User>(this.url+'/Login',data).pipe(map((user : User) => {
       
       
       console.log(user)
       this.isAdmin = user.isAdmin
       
       this.myUser = user
       this.token = user.token
       this.currentUser = user
    }));
   }
   logout(){
     this.myUser = undefined
     this._currentUser = undefined;
     this.router.navigateByUrl("/")
   }
}
