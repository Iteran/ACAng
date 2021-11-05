import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegister} from '../models/userRegister'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url : string = "https://localhost:44350/api/User";
  
  constructor(private httpclient : HttpClient) { }

  register(user : UserRegister) : Observable<void>{
    return this.httpclient.post<any>(this.url,user)
  }
  Bind(customerId : number, userId : number) : Observable<void>{
    console.log(customerId)
    return this.httpclient.post<any>(this.url+"/"+customerId,userId)
  }
}
