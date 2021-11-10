import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  itemAdmin : any[] =[
    {text : 'Dashboard', icon : null, path: '/dashboard'}
    

  ]
  isAdmin! : boolean
  items: any[] = 
  [
    {text : 'Produits', icon : null, path: '/baseProduct'}
  ]

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  getAdmin() : boolean{
   
    if (this.authService.myUser?.isAdmin) return true
    else return false
  }
}
