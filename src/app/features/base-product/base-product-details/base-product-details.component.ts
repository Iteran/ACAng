import { Component, Input, OnInit } from '@angular/core';
import { BaseProduct } from 'src/app/core/models/baseProduct';
import { BaseProductService } from 'src/app/core/services/base-product.service';

@Component({
  templateUrl: './base-product-details.component.html',
  styleUrls: ['./base-product-details.component.scss']
})
export class BaseProductDetailsComponent implements OnInit {
  selectedProduct! : BaseProduct
  constructor(private baseProductService : BaseProductService) { }
  defaultPicture : string = "https://localhost:44350/upfile/defaultImg.jpg"
  ngOnInit(): void {
    this.LoadData()
  }
  LoadData(){
    this.baseProductService.GetBaseProductById().subscribe(data => this.selectedProduct = data)
  }
}
