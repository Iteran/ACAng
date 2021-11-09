import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/core/services/customer.service';
import { customer } from 'src/app/core/models/customer'
import { NbDialogService } from '@nebular/theme';
import { CustomerModifyComponent } from '../customer-modify/customer-modify.component';

@Component({
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.scss']
})
export class CustomerprofileComponent implements OnInit {
 
  selectedCustomer! : customer
  constructor(private customerService : CustomerService, private dialogservice : NbDialogService) { }

  ngOnInit(): void {
    
    this.LoadData()
    
  }

  LoadData(){
    let x = sessionStorage.getItem("TOKEN_IsAdmin")
    console.log(x)
    
    this.customerService.GetById().subscribe(data => this.selectedCustomer = data)
  }
  OpenDialog(id : number){
    let x = sessionStorage.getItem("TOKEN_IsAdmin")
  
    if (x == "true") this.customerService.selectedId = id
    this.dialogservice.open(CustomerModifyComponent, {context :{selectedCustomer : this.selectedCustomer}})
    
  }
}
