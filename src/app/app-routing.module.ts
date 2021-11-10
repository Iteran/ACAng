import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAdminGuardGuard } from './core/guard/is-admin-guard.guard';
import { IsAuthenticatedGuard } from './core/guard/is-authenticaded.gard';
import { AddBaseProductComponent } from './features/base-product/add-base-product/add-base-product.component';
import { BaseProductDetailsComponent } from './features/base-product/base-product-details/base-product-details.component';
import { BaseProductComponent } from './features/base-product/base-product.component';
import { CreateCustomerComponent } from './features/customer/create-customer/create-customer.component';
import { CustomerModifyComponent } from './features/customer/customer-modify/customer-modify.component';
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
    {path :"create-customer",component : CreateCustomerComponent},
    {path : "customerModify",component: CustomerModifyComponent}

  ]},
  {path : "dashboard",component: DashboardComponent, canActivate : [IsAdminGuardGuard], children :[]},
  {path : "customerDashboard",component: CustomerDashboardComponent, canActivate : [IsAdminGuardGuard]} ,
  {path : "customerProfile",component: CustomerprofileComponent},
  {path : "baseProduct",component: BaseProductComponent, children:[
    {path :"baseProductDetails" , component : BaseProductDetailsComponent},
    {path :"addBaseProduct" , component : AddBaseProductComponent, canActivate : [IsAdminGuardGuard]}
  ]}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
