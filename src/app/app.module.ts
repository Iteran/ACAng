import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    
    
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
    AppRoutingModule
    
    
    
    
  ],
  providers: [{provide  : HTTP_INTERCEPTORS,useClass: TokenInterceptor, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
