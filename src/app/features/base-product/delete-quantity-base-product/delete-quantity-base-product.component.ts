import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { BaseProduct } from 'src/app/core/models/baseProduct';
import { BaseProductService } from 'src/app/core/services/base-product.service';

@Component({
  templateUrl: './delete-quantity-base-product.component.html',
  styleUrls: ['./delete-quantity-base-product.component.scss']
})
export class DeleteQuantityBaseProductComponent implements OnInit {
  @Input() selectedBaseProduct! : BaseProduct
  constructor(private service : BaseProductService,private ref : NbDialogRef<DeleteQuantityBaseProductComponent>) { }
  Quantity! : number
  ngOnInit(): void {
  }
  Submit(){
    console.log(this.Quantity)
    this.service.DeleteQuantity(this.selectedBaseProduct.id?? 0,this.Quantity).subscribe(()=>this.ref.close() )
  }
  
}
