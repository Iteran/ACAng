import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ACAng';
  items : NbMenuItem[] = [

  ]
  constructor(public authService : AuthService){

  }
  logout(){
    this.authService.logout()
  }
}
