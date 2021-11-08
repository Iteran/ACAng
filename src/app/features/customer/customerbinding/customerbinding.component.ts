import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  templateUrl: './customerbinding.component.html',
  styleUrls: ['./customerbinding.component.scss']
})
export class CustomerbindingComponent implements OnInit {

  fg! : FormGroup
  constructor(private userService : UserService, private fb : FormBuilder,private authService : AuthService) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      customerId : [null,Validators.required]
    })
  }
  Bind(){
    
    this.userService.Bind(this.fg.value.customerId).subscribe(() => this.userService.getCurrentUser())
  }

}
