import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { RoomComponent } from './room/room.component';
import { TicketComponent } from './ticket/ticket.component';
import { TaskComponent } from './task/task.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    ProjectComponent,
    RoomComponent,
    TicketComponent,
    TaskComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ToastModule
  ],
  providers: [MessageService],
})
export class AdminModule { }
