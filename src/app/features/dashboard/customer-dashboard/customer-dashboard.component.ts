import { Component, OnInit } from '@angular/core';
import { customer } from 'src/app/core/models/customer';
import { CustomerService } from 'src/app/core/services/customer.service';
import { NbDialogService } from '@nebular/theme';
import { CustomerprofileComponent } from '../../customer/customerprofile/customerprofile.component';

@Component({
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {
  customers : customer[] = []
  constructor(private customerService : CustomerService, private dialogservice : NbDialogService) { }
  
  ngOnInit(): void {
    this.LoadData()
    console.log(this.customers)
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

}

