import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  itemAdmin : any[] =[
    {text : 'Dashboard', icon : null, path: '/dashboard'}
  ]
  items: any[] = 
  [
    
  ]

  constructor() { }

  ngOnInit(): void {
  }
  getAdmin() : boolean{
   
    if (sessionStorage.getItem("TOKEN_IsAdmin") == "true") return true
    else return false
  }
}
