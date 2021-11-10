import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseProduct } from '../models/baseProduct';

@Injectable({
  providedIn: 'root'
})
export class BaseProductService {
  private readonly url : string = "https://localhost:44350/api/baseProduct";
  constructor(private httpclient : HttpClient) { }
  selectedProductId : number = 1
  AddBaseProduct(product : BaseProduct) : Observable<void>{
    return this.httpclient.post<void>(this.url,product)
  }
  GetAllBaseProduct(): Observable<BaseProduct[]>{
    return this.httpclient.get<BaseProduct[]>(this.url)
  }
  GetBaseProductById() : Observable<BaseProduct>{
    return this.httpclient.get<BaseProduct>(this.url+"/"+this.selectedProductId)
  }
  DeleteBaseProduct(id : number) : Observable<void>{
    return this.httpclient.delete<void>(this.url+"/"+id)
  }
  AddQuantity(id : number, quantity : number) : Observable<void>{
    return this.httpclient.patch<void>(this.url + "/Add/"+id,quantity)
  }
  DeleteQuantity(id : number, quantity : number) : Observable<void>{
    console.log(quantity)
    return this.httpclient.patch<void>(this.url+"/Delete/"+id,quantity)
  }
  UpdateProduct(id : number, body : BaseProduct) : Observable<BaseProduct>{
    return this.httpclient.put<BaseProduct>(this.url+"/"+id,body)
  }
  upload(ftu : File) : Observable<string> {

    let formData : FormData = new FormData();

    formData.append('myFile', ftu, ftu.name);

    return this.httpclient.post(this.url+"/uploadfile", formData, {responseType : 'text'})

  }
}
