import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbButtonModule, NbCardModule, NbDialogModule, NbIconModule, NbLayoutModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    
    
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
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
