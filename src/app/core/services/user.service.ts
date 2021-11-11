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
    
    return this.httpclient.post<any>(this.url+"/"+customerId,this.authService.myUser?.id)
  }

  getCurrentUser() {
    this.httpclient.get<User>(this.url+"/"+this.authService.myUser?.id).subscribe((u :User) => 
    {
      this.authService.myUser = u
      
    }
     , (error) => console.log(error))
  }
}
