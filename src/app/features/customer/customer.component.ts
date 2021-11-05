import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { CustomerService } from 'src/app/core/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  fg! : FormGroup
  constructor(private customerService : CustomerService, private fb : FormBuilder,private authService : AuthService) { }
  

  ngOnInit(): void {
    this.fg = this.fb.group({
      customerId : [null,Validators.required]
    })
  }

}
