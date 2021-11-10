import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/core/services/customer.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  fg! : FormGroup
  constructor(private customerService : CustomerService, private fb : FormBuilder,private toastr : ToastrService,private router : Router,private userService : UserService,private dialogRef : NbDialogRef<CreateCustomerComponent>) { }
  
  ngOnInit(): void {
    this.fg = this.fb.group({
      name : [null,Validators.required],
      firstName : [null],
      email : [null,[Validators.required,Validators.email]],
      address : [null,Validators.required],
      businessName : [null],
      phoneNumber : [null]})
  }

  create(){
    
    if(sessionStorage.getItem("AdminTouch") != "true")this.customerService.Create(this.fg.value).subscribe((id : number)=>this.userService.Bind(id).subscribe(() =>{
      this.router.navigateByUrl("/"); 
      this.toastr.success("Merci pour votre soutient");
      this.userService.getCurrentUser()
    }
      ,error =>{this.toastr.error("L'inscription à échouée, vérifiez vos information et recommencez")})
    )
    else 
     this.customerService.Create(this.fg.value).subscribe(
      ()=> this.dialogRef.close()
     )
  }
}
