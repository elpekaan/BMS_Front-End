import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperDashboardComponent } from './dashboard/dashboard.component';
import { DeveloperProjectComponent } from './project/project.component';
import { DeveloperRoomComponent } from './room/room.component';
import { DeveloperTaskComponent } from './task/task.component';
import { DeveloperTicketComponent } from './ticket/ticket.component';



@NgModule({
  declarations: [
    DeveloperDashboardComponent,
    DeveloperProjectComponent,
    DeveloperRoomComponent,
    DeveloperTaskComponent,
    DeveloperTicketComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DeveloperModule { }  
