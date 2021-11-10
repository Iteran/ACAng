import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';

import { ToastrService } from 'ngx-toastr';
import { config } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  fg! :FormGroup
  constructor(private userService : UserService, private fb : FormBuilder, private toastr : ToastrService,private router : Router, private ref : NbDialogRef<RegisterComponent>) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      email : [null,[Validators.required,Validators.email]],
      password : [null,Validators.required],
      confirmPassword : [null,Validators.required]
    })
  }
  

  register(){
    this.userService.register(this.fg.value).subscribe(()=> {this.router.navigateByUrl("/Login"),this.ref.close()
    this.toastr.success("Merci de vôtre inscription, vous pouvez vous connecter");
  },error => {this.toastr.error("L'inscription à échouée, vérifiez vos information et recommencez")})
  }
}
