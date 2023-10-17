import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/core/services/api/api.service';
import { Room } from 'src/core/models/room.model';
import { Project } from 'src/core/models/project.model';
import { Ticket } from 'src/core/models/ticket.model';
import { User } from 'src/core/models/user.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit{

  constructor(private apiService: ApiService) {}

  rooms: Room[] = [];
  tickets : Ticket[] = [];
  projects: Project[] = [];

  ngOnInit() {
    // Görevleri ve kullanıcıları çek
    this.apiService.getAllEntities(Room).subscribe((roomResult) => {
      this.rooms = roomResult.data;
        this.apiService.getAllEntities(Ticket).subscribe((userResult) => {
          this.tickets = userResult.data;
            this.apiService.getAllEntities(Project).subscribe((projectResult)=>{
              this.projects = projectResult.data;
          })
      });
    });
  }
}
