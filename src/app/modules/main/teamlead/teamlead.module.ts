import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamLeadDashboardComponent } from './dashboard/dashboard.component';
import { TeamLeadProjectComponent } from './project/project.component';
import { TeamLeadRoomComponent } from './room/room.component';
import { TeamLeadTaskComponent } from './task/task.component';
import { TeamLeadTicketComponent } from './ticket/ticket.component';



@NgModule({
  declarations: [
    TeamLeadDashboardComponent,
    TeamLeadProjectComponent,
    TeamLeadRoomComponent,
    TeamLeadTaskComponent,
    TeamLeadTicketComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TeamleadModule { }
