import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbSidebarModule, NbThemeModule, NbToastrModule } from '@nebular/theme';

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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CustomerComponent,
    CustomerbindingComponent
    
    
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
    MatFormFieldModule
    
    
    
    
    
  ],
  providers: [{provide  : HTTP_INTERCEPTORS,useClass: TokenInterceptor, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
