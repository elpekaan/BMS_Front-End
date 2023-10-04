import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { DefaultFooterComponent } from './containers/default-layout/default-footer/default-footer.component';
import { DefaultNavbarComponent } from './containers/default-layout/default-navbar/default-navbar.component';
import { DefaultSidebarComponent } from './containers/default-layout/default-sidebar/default-sidebar.component';
import { DefaultWelcomePageComponent } from './containers/default-welcome-page/default-welcome-page.component';
import { DefaultLoginPageComponent } from './containers/default-welcome-page/default-login-page/default-login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    DefaultFooterComponent,
    DefaultNavbarComponent,
    DefaultSidebarComponent,
    DefaultWelcomePageComponent,
    DefaultLoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
