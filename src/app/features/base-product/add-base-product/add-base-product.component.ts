import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

import { BaseProduct } from 'src/app/core/models/baseProduct';
import { BaseProductService } from 'src/app/core/services/base-product.service';
import { UploadService } from 'src/app/core/services/upload.service';
import { BaseProductDetailsComponent } from '../base-product-details/base-product-details.component';
import { BaseProductComponent } from '../base-product.component';

@Component({
  templateUrl: './add-base-product.component.html',
  styleUrls: ['./add-base-product.component.scss']
})
export class AddBaseProductComponent implements OnInit {
  fg! : FormGroup
  myFile! : File
  constructor(
    private baseproducservice : BaseProductService, 
    private fb : FormBuilder, 
    private upService : UploadService, 
    private dialogRef : NbDialogRef<AddBaseProductComponent>) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      name : [null,Validators.required],
      picture : [null],
      description :[null],
      quantity :[null,Validators.required]
    })
  }
  Getfile(e : any) {
    this.myFile = e.target.files[0]
    console.log(this.myFile)
    //this.startUpload();
  }

  OnSubmit() {
    const myProduct : BaseProduct = {name : this.fg.value.name,description : this.fg.value.description,quantity : this.fg.value.quantity, id : null, picture : null}
    if (this.myFile == null) this.baseproducservice.AddBaseProduct(myProduct).subscribe( () => this.dialogRef.close())
    if(this.myFile != null) this.upService.upload(this.myFile).subscribe((url : string) => {
      myProduct.picture = url
      console.log(url)
      
      this.baseproducservice.AddBaseProduct(myProduct).subscribe(
        () => this.dialogRef.close()
      )
  
      // this.url = url;
    },(error) => console.log(error) )

  }


}
