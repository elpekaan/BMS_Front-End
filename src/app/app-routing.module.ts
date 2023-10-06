import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './modules/main/admin/dashboard/dashboard.component';
import { ProjectComponent } from './modules/main/admin/project/project.component';
import { RoomComponent } from './modules/main/admin/room/room.component';
import { TaskComponent } from './modules/main/admin/task/task.component';
import { TicketComponent } from './modules/main/admin/ticket/ticket.component';

const routes: Routes = [ 
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/project', component: ProjectComponent },
  { path: 'admin/room', component: RoomComponent },
  { path: 'admin/task', component: TaskComponent },
  { path: 'admin/ticket', component: TicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
