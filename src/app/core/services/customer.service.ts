import { NumberInput } from '@angular/cdk/coercion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbUserComponent } from '@nebular/theme';
import { Observable } from 'rxjs';
import { bindingCustomer} from '../models/bindingCustomer'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly url : string = "https://localhost:44350/api/Customer";
  constructor(private httpclient : HttpClient) { }

  Bind(customerId : number, userId : number) : Observable<void>{
    console.log(customerId)
    return this.httpclient.post<any>(this.url+"/"+customerId,userId)
  }
}
