import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { BaseProduct } from 'src/app/core/models/baseProduct';
import { BaseProductService } from 'src/app/core/services/base-product.service';
import { AddBaseProductComponent } from './add-base-product/add-base-product.component';
import { BaseProductDetailsComponent } from './base-product-details/base-product-details.component';

@Component({
  selector: 'app-base-product',
  templateUrl: './base-product.component.html',
  styleUrls: ['./base-product.component.scss']
})
export class BaseProductComponent implements OnInit {

  constructor(private baseProductService : BaseProductService, private dialogService : NbDialogService) { }
  baseProducts : BaseProduct[] = []
  selectedBaseProduct! : BaseProduct

  ngOnInit(): void {
    this.LoadData()
  }
  LoadData(){
    this.baseProductService.GetAllBaseProduct().subscribe(data => this.baseProducts = data)
  }
  OpenDialog(id : number){ 
    this.baseProductService.selectedProductId = id
    this.dialogService.open(BaseProductDetailsComponent, {context :{selectedProduct : this.selectedBaseProduct}})
    
    
  }
  OpenDialogAdd(){
    let ref = this.dialogService.open(AddBaseProductComponent)
    ref.onClose.subscribe(() => this.LoadData())
  }
}
