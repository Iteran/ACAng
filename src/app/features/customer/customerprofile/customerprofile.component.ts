import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/core/services/customer.service';

@Component({
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.scss']
})
export class CustomerprofileComponent implements OnInit {
 
  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
    
    this.LoadData()
    console.log(this.customerService.selectedId)
  }

  LoadData(){
    
    this.customerService.GetById().subscribe()
  }
}
