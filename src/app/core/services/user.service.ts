import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserRegister} from '../models/userRegister'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url : string = "https://localhost:44350/api/User";
  
  constructor(private httpclient : HttpClient, private authService : AuthService) { }

  register(user : UserRegister) : Observable<void>{
    return this.httpclient.post<any>(this.url,user)
  }
  Bind(customerId : number) : Observable<void>{
    console.log(customerId)
    
    return this.httpclient.post<any>(this.url+"/"+customerId,parseInt(sessionStorage.getItem("TOKEN_Id") ?? ""))
  }

  getCurrentUser() {
    this.httpclient.get<User>(this.url+"/"+sessionStorage.getItem('TOKEN_Id')).subscribe((u :User) => 
    {
      this.authService.currentUser = u
      sessionStorage.setItem("TOKEN_CustomerId",u.customerId ? u.customerId.toString()  : '');
    }
     , (error) => console.log(error))
  }
}
