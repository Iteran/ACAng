import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'TOKEN';
  private readonly url : string = "https://localhost:44350/api/Auth";
  public token!: any
  

  public get user(): User | null{
    if(!this.token) return null;
    return jwt_decode<User>(this.token);
  }
  constructor(private httpclient : HttpClient) {
    // this.token = sessionStorage.getItem(this.TOKEN_KEY);
   }
   login(data : Login) : Observable<void> {
     return this.httpclient.post<string>(this.url+'/Login',data).pipe(map((token : any) => {
       console.log(token)
       sessionStorage.setItem('TOKEN',JSON.stringify(token))
       sessionStorage.setItem("TOKEN_Id",token.Id);
       sessionStorage.setItem("TOKEN_CustomerId",token.CustomerId);
       sessionStorage.setItem("TOKEN_Email",token.Email);
       this.token = token
    }));
   }
   logout(){
     sessionStorage.removeItem(this.TOKEN_KEY);
     this.token = null;
   }
}
