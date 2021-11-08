import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { User } from './core/models/user';
import { AuthService } from './core/services/auth.service';
import { CustomerService } from './core/services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ACAng';
  items : NbMenuItem[] = [

  ]

  currentUser? : User
  
  constructor(public authService : AuthService,public customerService : CustomerService){

  }
  getToken(){
    return sessionStorage.getItem("TOKEN")
  }
  getCustomerId(){
    return sessionStorage.getItem("TOKEN_CustomerId")
  }
  ngOnInit() {
    this.authService.userSub.subscribe((u : User) => this.currentUser = (u?u:undefined))
  }
  logout(){
    this.authService.logout()
  }
}
