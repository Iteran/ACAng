import { NumberInput } from '@angular/cdk/coercion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbUserComponent } from '@nebular/theme';
import { Observable } from 'rxjs';
import { bindingCustomer} from '../models/bindingCustomer'
import { customer } from '../models/customer';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly url : string = "https://localhost:44350/api/Customer";
  token : any
  constructor(private httpclient : HttpClient, private authservice : AuthService) { 
    this.token = sessionStorage.getItem("TOKEN")
  }
  selectedId : number | null = null
  
  GetById() : Observable<customer>{
    if (this.selectedId == null) this.selectedId = this.authservice.myUser?.customerId?? 0
    let c = this.httpclient.get<customer>(this.url+"/"+this.selectedId)
    
    return c
  }
  Create(customer : customer):Observable<number>{
    return this.httpclient.post<number>(this.url,customer)
  }
  GetAll() : Observable<customer[]>{
    return this.httpclient.get<customer[]>(this.url)
  }
  Delete(id : number) : Observable<boolean>{
    return this.httpclient.delete<boolean>(this.url +"/"+ id)
  }
  Modify (body : customer) : Observable<customer>{
    if (this.selectedId == null) this.selectedId = this.selectedId = this.authservice.myUser?.customerId?? 0
    return this.httpclient.put<customer>(this.url+"/"+this.selectedId,body)
  }
  
}
