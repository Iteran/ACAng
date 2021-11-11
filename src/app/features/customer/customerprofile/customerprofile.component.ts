import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/core/services/customer.service';
import { customer } from 'src/app/core/models/customer'
import { NbDialogService } from '@nebular/theme';
import { CustomerModifyComponent } from '../customer-modify/customer-modify.component';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.scss']
})
export class CustomerprofileComponent implements OnInit {
 
  selectedCustomer! : customer
  constructor(private customerService : CustomerService,
    private dialogservice : NbDialogService,
    private authService : AuthService) { }

  ngOnInit(): void {
    
    this.LoadData()
    
  }

  LoadData(){
    
    
    this.customerService.GetById().subscribe(data => this.selectedCustomer = data)
  }
  OpenDialog(id : number){
    let x = this.authService.myUser?.isAdmin
  
    if (x) this.customerService.selectedId = id
    let ref = this.dialogservice.open(CustomerModifyComponent, {context :{selectedCustomer : this.selectedCustomer}})
    ref.onClose.subscribe(() => this.LoadData())
  }
}
