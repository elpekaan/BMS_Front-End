import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { DefaultSidebarComponent } from './containers/default-layout/default-sidebar/default-sidebar.component';
import { ContentTopbarComponent } from './containers/default-layout/content-topbar/content-topbar.component';
import { ContentFooterComponent } from './containers/default-layout/content-footer/content-footer.component';
import { DefaultWelcomePageComponent } from './containers/default-welcome-page/default-welcome-page.component';
import { GuidePageComponent } from './containers/default-welcome-page/guide-page/guide-page.component';
import { HomePageComponent } from './containers/default-welcome-page/home-page/home-page.component';
import { AboutusPageComponent } from './containers/default-welcome-page/aboutus-page/aboutus-page.component';
import { LoginPageComponent } from './containers/default-welcome-page/login-page/login-page.component';
import { DefaultWelcomePageNavbarComponent } from './containers/default-welcome-page-navbar/default-welcome-page-navbar.component';
import { ContactPageComponent } from './containers/default-welcome-page/contact-page/contact-page.component';


import { AuthModule } from './modules/auth/auth.module'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,    
    DefaultSidebarComponent,
    ContentTopbarComponent,
    ContentFooterComponent,
    DefaultWelcomePageComponent,
    GuidePageComponent,
    HomePageComponent,
    AboutusPageComponent,
    LoginPageComponent,
    DefaultWelcomePageNavbarComponent,
    ContactPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
