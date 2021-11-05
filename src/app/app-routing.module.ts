import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerbindingComponent } from './features/customer/customerbinding/customerbinding.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  {path : "Login",component: LoginComponent},
  {path : "customerbinding",component : CustomerbindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
