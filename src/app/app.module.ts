import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';

import { DefaultSidebarComponent } from './containers/default-layout/default-sidebar/default-sidebar.component';
import { DefaultWelcomePageComponent } from './containers/default-welcome-page/default-welcome-page.component';
import { DefaultLoginPageComponent } from './containers/default-welcome-page/default-login-page/default-login-page.component';

import { ContentTopbarComponent } from './containers/default-layout/content-topbar/content-topbar.component';
import { ContentFooterComponent } from './containers/default-layout/content-footer/content-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,    
    DefaultSidebarComponent,
    DefaultWelcomePageComponent,
    DefaultLoginPageComponent,
    ContentTopbarComponent,
    ContentFooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
