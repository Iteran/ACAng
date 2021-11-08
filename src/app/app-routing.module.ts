import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAdminGuardGuard } from './core/guard/is-admin-guard.guard';
import { IsAuthenticatedGuard } from './core/guard/is-authenticaded.gard';
import { CreateCustomerComponent } from './features/customer/create-customer/create-customer.component';
import { CustomerComponent } from './features/customer/customer.component';
import { CustomerbindingComponent } from './features/customer/customerbinding/customerbinding.component';
import { CustomerprofileComponent } from './features/customer/customerprofile/customerprofile.component';
import { CustomerDashboardComponent } from './features/dashboard/customer-dashboard/customer-dashboard.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  {path : "Login",component: LoginComponent},
  {path : "customer",component : CustomerComponent, canActivate: [ IsAuthenticatedGuard ],children : [
    {path :"customerbinding",component : CustomerbindingComponent},
    {path :"create-customer",component : CreateCustomerComponent}
  ]},
  {path : "dashboard",component: DashboardComponent, canActivate : [IsAdminGuardGuard], children :[
    
  ]},
  {path : "customerDashboard",component: CustomerDashboardComponent},
  {path : "customerProfile",component: CustomerprofileComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
