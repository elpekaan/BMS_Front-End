import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './containers/default-welcome-page/home-page/home-page.component';
import { GuidePageComponent } from './containers/default-welcome-page/guide-page/guide-page.component';
import { AboutusPageComponent } from './containers/default-welcome-page/aboutus-page/aboutus-page.component';
import { ContactPageComponent } from './containers/default-welcome-page/contact-page/contact-page.component';
import { LoginPageComponent } from './containers/default-welcome-page/login-page/login-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/HomePage', pathMatch: 'full' },
  { path: 'HomePage', component: HomePageComponent},
  { path: 'GuidePage', component: GuidePageComponent},
  { path: 'AboutUsPage', component: AboutusPageComponent},
  { path: 'ContactPage', component: ContactPageComponent},
  { path: 'LoginPage', component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
