import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { map, mergeMap } from 'rxjs/operators';
import { BaseProduct } from 'src/app/core/models/baseProduct';
import { PriceProduct } from 'src/app/core/models/priceProduct';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseProductService } from 'src/app/core/services/base-product.service';
import { AddBaseProductComponent } from './add-base-product/add-base-product.component';
import { AddPriceProductComponent } from './add-price-product/add-price-product.component';
import { AddQuantityBaseProductComponent } from './add-quantity-base-product/add-quantity-base-product.component';
import { BaseProductDetailsComponent } from './base-product-details/base-product-details.component';
import { BaseProductModifyComponent } from './base-product-modify/base-product-modify.component';
import { DeleteQuantityBaseProductComponent } from './delete-quantity-base-product/delete-quantity-base-product.component';

@Component({
  selector: 'app-base-product',
  templateUrl: './base-product.component.html',
  styleUrls: ['./base-product.component.scss']
})
export class BaseProductComponent implements OnInit {

  constructor(private baseProductService : BaseProductService,
     private dialogService : NbDialogService,
     private authService : AuthService) { }
  baseProducts : BaseProduct[] = []
  priceProducts : PriceProduct[] =[]
  selectedBaseProduct? : BaseProduct 
  isAdmin! : boolean
  selectedPriceProduct? : PriceProduct
  completeList! : CompleteProduct[]
  ngOnInit(): void {
    this.LoadData()
  }
  LoadData(){
    this.completeList = []
    this.baseProductService.GetAllBaseProduct().pipe(
      mergeMap((p : BaseProduct[]) => {
        return this.baseProductService.GetAllPrice().pipe(map(
          (l : PriceProduct[]) => {
            for(let i = 0; i<= p.length; i++){
              if(p[i]) {
                let id = l.findIndex(x => x.baseProductId == p[i].id)
              let currentPrice : PriceProduct = l[id]
              this.completeList.push({product : p[i], price : currentPrice })
              }
              
            }
          }
        ))
      })
    ).subscribe()

    this.baseProductService.GetAllBaseProduct().subscribe(data => this.baseProducts = data)
    this.baseProductService.GetAllPrice().subscribe(data => this.priceProducts = data)
    this.CheckAdmin()
    this.baseProductService.GetBaseProductById().subscribe(data => this.selectedBaseProduct = data)
  }
  OpenDialog(id : number){ 
    this.baseProductService.selectedProductId = id
    this.dialogService.open(BaseProductDetailsComponent, {context :{selectedProduct : this.selectedBaseProduct}})
    
    
  }
  OpenDialogAdd(){
    let ref = this.dialogService.open(AddBaseProductComponent)
    ref.onClose.subscribe(() => this.LoadData())
  }
  CheckAdmin(){
    if (this.authService.myUser?.isAdmin) this.isAdmin = true;
    else this.isAdmin = false
  }
  OpenDialogModify(id : number){
    
    this.baseProductService.selectedProductId = id
    this.baseProductService.GetBaseProductById().subscribe(data =>  {
      this.selectedBaseProduct = data;
      var ref = this.dialogService.open(BaseProductModifyComponent,{context :{selectedBaseProduct : this.selectedBaseProduct}});
      ref.onClose.subscribe(()=> this.LoadData())} )
  }
  Delete(id : number){
    this.baseProductService.DeleteBaseProduct(id).subscribe(()=> this.LoadData())
    
  }
  OpenDialogMinus(id : number){
    this.baseProductService.selectedProductId = id
    this.baseProductService.GetBaseProductById().subscribe(data =>  {
      this.selectedBaseProduct = data;
      var ref = this.dialogService.open(DeleteQuantityBaseProductComponent,{context :{selectedBaseProduct : this.selectedBaseProduct}});
      ref.onClose.subscribe(()=> this.LoadData())} )
  }
  OpenDialogAddQuantity(id : number){
    this.baseProductService.selectedProductId = id
    this.baseProductService.GetBaseProductById().subscribe(data =>  {
      this.selectedBaseProduct = data;
      var ref = this.dialogService.open(AddQuantityBaseProductComponent,{context :{selectedBaseProduct : this.selectedBaseProduct}});
      ref.onClose.subscribe(()=> this.LoadData())} )
  }
  OpenPriceDialog(id : number){
    this.baseProductService.selectedProductId = id
    this.baseProductService.GetPrice().subscribe(data => {
      this.selectedPriceProduct = data;
      var ref = this.dialogService.open(AddPriceProductComponent,{context : {selectedPriceProduct : this.selectedPriceProduct}});
      ref.onClose.subscribe(()=> this.LoadData())
    })
  }
}

export interface CompleteProduct {
  product : BaseProduct
  price : PriceProduct
}
