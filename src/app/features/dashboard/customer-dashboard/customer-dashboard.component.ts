import { Component, OnInit } from '@angular/core';
import { customer } from 'src/app/core/models/customer';
import { CustomerService } from 'src/app/core/services/customer.service';
import { NbDialogService } from '@nebular/theme';
import { CustomerprofileComponent } from '../../customer/customerprofile/customerprofile.component';
import { CreateCustomerComponent } from '../../customer/create-customer/create-customer.component';

@Component({
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {
  customers : customer[] = []
  constructor(private customerService : CustomerService, private dialogservice : NbDialogService) { }
  AdminTouch : boolean = true
  ngOnInit(): void {
    this.LoadData()
    
  }
  LoadData(){
    this.customerService.GetAll().subscribe(data => this.customers = data) 
  }
  Delete(id : number){
    this.customerService.Delete(id).subscribe(() => this.LoadData())
  }
  OpenDialog(id : number){
   
    this.customerService.selectedId = id
    this.dialogservice.open(CustomerprofileComponent)
  }
  OpenDialogAdd(){
    sessionStorage.setItem("AdminTouch","true")
    let ref = this.dialogservice.open(CreateCustomerComponent)
    
    ref.onClose.subscribe(() => {this.LoadData(),
     sessionStorage.setItem("AdminTouch","false")})
  }

}

