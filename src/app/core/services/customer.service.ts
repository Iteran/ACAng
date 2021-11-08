import { NumberInput } from '@angular/cdk/coercion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbUserComponent } from '@nebular/theme';
import { Observable } from 'rxjs';
import { bindingCustomer} from '../models/bindingCustomer'
import { customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly url : string = "https://localhost:44350/api/Customer";
  token : any
  constructor(private httpclient : HttpClient) { 
    this.token = sessionStorage.getItem("TOKEN")
  }
  selectedId : number | null = null
  
  GetById() : Observable<customer>{
    if (this.selectedId == null) this.selectedId = parseInt(sessionStorage.getItem("TOKEN_CustomerId")?? "")
    return this.httpclient.get<customer>(this.url+"/"+this.selectedId)
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
 
  
}
