import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbMenuItem } from '@nebular/theme';
import { User } from './core/models/user';
import { AuthService } from './core/services/auth.service';
import { CustomerService } from './core/services/customer.service';
import { CreateCustomerComponent } from './features/customer/create-customer/create-customer.component';
import { CustomerbindingComponent } from './features/customer/customerbinding/customerbinding.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ACAng';
  items : NbMenuItem[] = [

  ]
  isAdmin! : boolean
  token! : string
  currentUser? : User
  
  constructor(public authService : AuthService,
    public customerService : CustomerService,
    private dialogService : NbDialogService){
    

  }
  getToken(){
    return this.authService.myUser?.email
  }
  getCustomerId(){
    return this.authService.myUser?.customerId
  }
  ngOnInit() {
    this.authService.userSub.subscribe((u : User) => this.currentUser = (u?u:undefined))
  }
  logout(){
    this.authService.logout()
  }
  resetId(){
    this.customerService.selectedId = null
  }
  OpenAddCustomer(){
    this.dialogService.open(CreateCustomerComponent)
  }
  OpenBindCustomer(){
    this.dialogService.open(CustomerbindingComponent)
  }
}
