import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { BaseProduct } from 'src/app/core/models/baseProduct';
import { BaseProductService } from 'src/app/core/services/base-product.service';
import { UploadService } from 'src/app/core/services/upload.service';

@Component({
  templateUrl: './base-product-modify.component.html',
  styleUrls: ['./base-product-modify.component.scss']
})
export class BaseProductModifyComponent implements OnInit {
  @Input() selectedBaseProduct! : BaseProduct
  myFile! : File
  defaultPicture : string = "https://localhost:44350/upfile/defaultImg.jpg"
  fg! : FormGroup
  constructor(private baseProductService : BaseProductService, 
    private ref : NbDialogRef<BaseProductModifyComponent>,
    private fb : FormBuilder,
    private upService : UploadService) { }

  ngOnInit(): void {
    this.baseProductService.GetBaseProductById().subscribe(data => this.selectedBaseProduct = data)
    this.fg = this.fb.group({
      name : [this.selectedBaseProduct.name],
      description :[this.selectedBaseProduct.description],
      quantity :[this.selectedBaseProduct.quantity]
    })
  }
  Getfile(e : any) {
    this.myFile = e.target.files[0]
  }
  update(){
    console.log(this.myFile)
    const baseProductModified : BaseProduct = {name : this.fg.value.name, description : this.fg.value.description, quantity : this.fg.value.quantity, id : null, picture : this.selectedBaseProduct.picture}
    if (this.myFile == undefined) this.baseProductService.UpdateProduct(this.selectedBaseProduct.id?? 0,baseProductModified).subscribe(()=>this.ref.close())
    else
    this.upService.upload(this.myFile).subscribe((url : string) => 
    {
      console.log(url)
      baseProductModified.picture = url
      this.baseProductService.UpdateProduct(this.selectedBaseProduct.id?? 0,baseProductModified).subscribe(
        () => this.ref.close())
    },(error) => console.log(error))
  }


}
