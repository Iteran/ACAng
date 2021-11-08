import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'TOKEN';
  private readonly url : string = "https://localhost:44350/api/Auth";
  public token!: any

  _currentUser? : User

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
  constructor(private httpclient : HttpClient) {
    // this.token = sessionStorage.getItem(this.TOKEN_KEY);
   }
   login(data : Login) : Observable<void> {
     return this.httpclient.post<User>(this.url+'/Login',data).pipe(map((user : User) => {
       
       sessionStorage.setItem('TOKEN',JSON.stringify(user));
       sessionStorage.setItem("TOKEN_Id",user.id.toString());
       sessionStorage.setItem("TOKEN_CustomerId",user.customerId ? user.customerId.toString()  : '');
       sessionStorage.setItem("TOKEN_Email",user.email);
       sessionStorage.setItem("TOKEN_IsAdmin",user.isAdmin.toString())
       this.token = user.token
       this.currentUser = user
    }));
   }
   logout(){
     sessionStorage.clear()
     sessionStorage.setItem(this.TOKEN_KEY,'');
     
     this._currentUser = undefined;
   }
}
