import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/core/models/login';
import { AuthService } from 'src/app/core/services/auth.service';
import { RegisterComponent } from './register/register.component';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formgroup!: FormGroup

  constructor(
    private dialogservice : NbDialogService,
    private authService : AuthService,
    private formBuilder: FormBuilder,
    private toastr : ToastrService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.formgroup = this.formBuilder.group({
      email : [null,[Validators.required,Validators.email]],
     
      password : [null,[Validators.required]]
    })
  }
  login(){
    if(this.formgroup.valid){

      this.authService.login(this.formgroup.value).subscribe(()=> {this.router.navigateByUrl("/");
      this.toastr.success("Bienvenue");      
      
    
    },error => {this.toastr.error("La connection à échouée")})
    }
    
  }
  openDialog(){
    this.dialogservice.open(RegisterComponent)

  }
}

