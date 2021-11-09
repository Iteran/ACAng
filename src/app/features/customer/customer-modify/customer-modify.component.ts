import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { customer } from 'src/app/core/models/customer';
import { CustomerService } from 'src/app/core/services/customer.service';

@Component({
  templateUrl: './customer-modify.component.html',
  styleUrls: ['./customer-modify.component.scss']
})
export class CustomerModifyComponent implements OnInit {
  @Input() selectedCustomer! : customer
  fg : FormGroup = new FormGroup({})
  constructor(private customerService : CustomerService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      name : [this.selectedCustomer.name],
      firstName : [this.selectedCustomer.firstName],
      email : [this.selectedCustomer.email],
      address : [this.selectedCustomer.address],
      businessName : [this.selectedCustomer.businessName],
      phoneNumber : [this.selectedCustomer.phoneNumber]
      
    
    })
    // this.LoadData()
    // this.customerService.GetById().subscribe(data => {
    //   this.selectedCustomer = data
      
     
    // }
    
    // )
  
   
    
  }
  Update(){
    this.customerService.Modify(this.fg.value).subscribe(()=>this.LoadData())
  }
  LoadData(){
    
    this.customerService.GetById().subscribe(data => this.selectedCustomer = data)
  }
}
