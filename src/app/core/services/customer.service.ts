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

  
  GetById() : Observable<customer>{
    
    return this.httpclient.get<customer>(this.url+"/"+JSON.parse(this.token).customerId)

  }
}
