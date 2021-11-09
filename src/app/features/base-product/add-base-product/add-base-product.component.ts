import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseProductService } from 'src/app/core/services/base-product.service';

@Component({
  templateUrl: './add-base-product.component.html',
  styleUrls: ['./add-base-product.component.scss']
})
export class AddBaseProductComponent implements OnInit {
  fg! : FormGroup
  constructor(private baseproducservice : BaseProductService, private fb : FormBuilder ) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      name : [null,Validators.required],
      picture : [null],
      description :[null],
      quantity :[null,Validators.required]
    })
  }

}
