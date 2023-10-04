import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { RoomComponent } from './room/room.component';
import { TaskComponent } from './task/task.component';
import { TicketComponent } from './ticket/ticket.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProjectComponent,
    RoomComponent,
    TaskComponent,
    TicketComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TeamleadModule { }
