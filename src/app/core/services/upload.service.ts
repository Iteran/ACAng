import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  url : string = "https://localhost:44350/api/File";

  constructor(
    private _client : HttpClient
  ) { }

  upload(ftu : File) : Observable<string>  {
    let formData : FormData = new FormData();
    formData.append('myFile', ftu, ftu.name);
    return this._client.post(this.url+"/uploadfile", formData, {responseType : 'text'})
  }

  
}


export interface Product {
  name : string
  url? : string
}