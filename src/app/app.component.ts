import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { AuthService } from './core/services/auth.service';
import { CustomerService } from './core/services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ACAng';
  items : NbMenuItem[] = [

  ]
  
  constructor(public authService : AuthService,public customerService : CustomerService){

  }
  logout(){
    this.authService.logout()
  }
}
