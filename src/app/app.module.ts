import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbSidebarModule, NbThemeModule, NbToastrModule } from '@nebular/theme';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { LoginComponent } from './features/login/login.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { SharedModule } from './shared/shared.module';
import { RegisterComponent } from './features/login/register/register.component';
import {PasswordModule} from 'primeng/password';
import { ToastrModule } from 'ngx-toastr';
import { CustomerComponent } from './features/customer/customer.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CustomerbindingComponent } from './features/customer/customerbinding/customerbinding.component';
import { CustomerprofileComponent } from './features/customer/customerprofile/customerprofile.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CreateCustomerComponent } from './features/customer/create-customer/create-customer.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CustomerDashboardComponent } from './features/dashboard/customer-dashboard/customer-dashboard.component';
import {MatTableModule} from '@angular/material/table';
import {TableModule} from 'primeng/table';
import { CustomerModifyComponent } from './features/customer/customer-modify/customer-modify.component';
import { BaseProductComponent } from './features/base-product/base-product.component';
import { BaseProductDetailsComponent } from './features/base-product/base-product-details/base-product-details.component';
import { AddBaseProductComponent } from './features/base-product/add-base-product/add-base-product.component';
import { BaseProductModifyComponent } from './features/base-product/base-product-modify/base-product-modify.component';
import { AddQuantityBaseProductComponent } from './features/base-product/add-quantity-base-product/add-quantity-base-product.component';
import { DeleteQuantityBaseProductComponent } from './features/base-product/delete-quantity-base-product/delete-quantity-base-product.component';
import { AddPriceProductComponent } from './features/base-product/add-price-product/add-price-product.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CustomerComponent,
    CustomerbindingComponent,
    CustomerprofileComponent,
    CreateCustomerComponent,
    DashboardComponent,
    CustomerDashboardComponent,
    CustomerModifyComponent,
    BaseProductComponent,
    BaseProductDetailsComponent,
    AddBaseProductComponent,
    BaseProductModifyComponent,
    AddQuantityBaseProductComponent,
    DeleteQuantityBaseProductComponent,
    AddPriceProductComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbDialogModule.forRoot(),
    SharedModule,
    NbLayoutModule,
    NbIconModule,
    NbSidebarModule.forRoot(),
    CommonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbIconModule,
    NbEvaIconsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NbInputModule,
    NbDialogModule.forRoot(),
    PasswordModule,
    NbToastrModule.forRoot({duration :100}),
    AppRoutingModule,
    ToastrModule.forRoot({timeOut : 2000}),
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    TableModule,
    MatListModule
    
    
    
    
    
    
  ],
  providers: [{provide  : HTTP_INTERCEPTORS,useClass: TokenInterceptor, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
