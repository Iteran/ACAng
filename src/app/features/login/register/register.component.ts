import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

import { config } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { MustMatch } from 'src/app/shared/validators/MustMatch.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  fg! :FormGroup
  constructor(private userService : UserService, private fb : FormBuilder, private toastr : NbToastrService,private router : Router) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      email : [null,[Validators.required,Validators.email]],
      password : [null,Validators.required],
      confirmPassword : [null,Validators.required]
    },{Validators : MustMatch('password','confirmPassword'),})
  }
  

  register(){
    this.userService.register(this.fg.value).subscribe(()=> {this.router.navigateByUrl("/Login");
    this.toastr.success("Merci de vôtre inscription, vous pouvez vous connecter");
  },error => {this.toastr.danger("L'inscription à échouée, vérifiez vos information et recommencez")})
  }
}
