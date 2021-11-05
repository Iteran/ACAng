import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { CustomerService } from 'src/app/core/services/customer.service';

@Component({
  templateUrl: './customerbinding.component.html',
  styleUrls: ['./customerbinding.component.scss']
})
export class CustomerbindingComponent implements OnInit {

  fg! : FormGroup
  constructor(private customerService : CustomerService, private fb : FormBuilder,private authService : AuthService) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      customerId : [null,Validators.required]
    })
  }
  Bind(){
    let token : any = sessionStorage.getItem("TOKEN")
    this.customerService.Bind(this.fg.value.customerId,JSON.parse(token).id).subscribe()
  }

}
