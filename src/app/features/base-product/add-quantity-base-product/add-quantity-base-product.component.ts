import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { BaseProduct } from 'src/app/core/models/baseProduct';
import { BaseProductService } from 'src/app/core/services/base-product.service';

@Component({
  templateUrl: './add-quantity-base-product.component.html',
  styleUrls: ['./add-quantity-base-product.component.scss']
})
export class AddQuantityBaseProductComponent implements OnInit {
  @Input() selectedBaseProduct! : BaseProduct
  constructor(private service : BaseProductService, private ref : NbDialogRef<AddQuantityBaseProductComponent>) { }
  Quantity! : number
  ngOnInit(): void {
  }
  Submit(){
    
    this.service.AddQuantity(this.selectedBaseProduct.id?? 0,this.Quantity).subscribe(()=>this.ref.close())
  }
}
