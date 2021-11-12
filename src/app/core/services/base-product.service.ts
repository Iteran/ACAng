import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddPriceProduct } from '../models/AddPriceProduct';
import { BaseProduct } from '../models/baseProduct';

import { PriceProduct } from '../models/priceProduct';

@Injectable({
  providedIn: 'root'
})
export class BaseProductService {
  private readonly url : string = "https://localhost:44350/api/baseProduct";
  constructor(private httpclient : HttpClient) { }
  selectedProductId : number = 1
  selectedPriceId : number = 1
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
  GetPrice(): Observable<PriceProduct>{
    return this.httpclient.get<PriceProduct>(this.url+"/Price/"+this.selectedProductId)
  }
  PostPrice(product : AddPriceProduct):Observable<PriceProduct>
  {
    return this.httpclient.post<PriceProduct>(this.url+"/Price/"+this.selectedProductId,product)
  }
  GetAllPrice(): Observable<PriceProduct[]>{
    return this.httpclient.get<PriceProduct[]>(this.url+"/Price/")
  }
}
