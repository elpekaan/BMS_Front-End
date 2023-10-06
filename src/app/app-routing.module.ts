import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './containers/default-welcome-page/home-page/home-page.component';
import { GuidePageComponent } from './containers/default-welcome-page/guide-page/guide-page.component';
import { AboutusPageComponent } from './containers/default-welcome-page/aboutus-page/aboutus-page.component';
import { ContactPageComponent } from './containers/default-welcome-page/contact-page/contact-page.component';
import { LoginPageComponent } from './containers/default-welcome-page/login-page/login-page.component';
import { DashboardComponent } from './modules/main/admin/dashboard/dashboard.component';
import { ProjectComponent } from './modules/main/admin/project/project.component';
import { RoomComponent } from './modules/main/admin/room/room.component';
import { TaskComponent } from './modules/main/admin/task/task.component';
import { TicketComponent } from './modules/main/admin/ticket/ticket.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/HomePage', pathMatch: 'full' },
  { path: 'HomePage', component: HomePageComponent},
  { path: 'GuidePage', component: GuidePageComponent},
  { path: 'AboutUsPage', component: AboutusPageComponent},
  { path: 'ContactPage', component: ContactPageComponent},
  { path: 'LoginPage', component: LoginPageComponent},
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/project', component: ProjectComponent },
  { path: 'admin/room', component: RoomComponent },
  { path: 'admin/task', component: TaskComponent },
  { path: 'admin/ticket', component: TicketComponent },
  { path: 'DefaultLayout', component: DefaultLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
