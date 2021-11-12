import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { PriceProduct } from 'src/app/core/models/priceProduct';
import { BaseProductService } from 'src/app/core/services/base-product.service';



@Component({
  templateUrl: './add-price-product.component.html',
  styleUrls: ['./add-price-product.component.scss']
})
export class AddPriceProductComponent implements OnInit {
  @Input() selectedPriceProduct! :PriceProduct
  fg! :  FormGroup
  constructor(
    private fb : FormBuilder,
    private service : BaseProductService,
    private dialogRef : NbDialogRef<AddPriceProductComponent>) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      priceProduct : [this.selectedPriceProduct.priceProduct,Validators.required],
      dateStart : [null,Validators.required]
    })
  }
  OnSubmit(){
    this.service.PostPrice(this.fg.value).subscribe(
      () => this.dialogRef.close()
      )
      console.log(this.fg.value)
  }

}
