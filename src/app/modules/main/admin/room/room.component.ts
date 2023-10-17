import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/core/services/api/api.service';
import { Room } from 'src/core/models/room.model';
import { Project } from 'src/core/models/project.model';
import { Ticket } from 'src/core/models/ticket.model';
import { User } from 'src/core/models/user.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { Router } from '@angular/router';@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit{

  constructor(private apiService: ApiService,private router:Router) {}

  rooms: Room[] = [];
  tickets : Ticket[] = [];
  projects: Project[] = [];
  users: User[] = [];

  ngOnInit() {
      this.apiService.getAllEntities(Room).subscribe((roomResult) => {
      this.rooms = roomResult.data;
      console.log(roomResult.data)
     })
      this.apiService.getAllEntities(Project).subscribe((projectResult)=>{
      this.projects = projectResult.data;
      console.log(projectResult.data)
     })
      this.apiService.getAllEntities(User).subscribe((userResult) =>{
      this.users = userResult.data;
      console.log(userResult.data)
     })
    }
    findRoomName(room_Name: string):string{
      const room = this.rooms.find((room)=> room_Name == room_Name);
      return room ? room.room_Name: '';
    }
    findRoomProject(roomProjectId: number): string {
      const project = this.projects.find((project) => roomProjectId === project.roomId);
      return project ? project.roomId.toString() : '';
    }
    findUserName(userId: number): string {
      const user = this.users.find((user) => user.id === userId);
      return user ? user.fullName : ''; // Kullanıcı adını göster veya boş bir dize döndür
    }
    deleteRoomName(room_Name: number) {
      this.apiService.deleteEntity(room_Name,Room).then(response => {
        if (response?.status == ResponseStatus.Ok) {      }
        console.log(response);
      })
    }
    refresh() {
      this.apiService.getAllEntities(Room).subscribe((response) => {
        this.rooms = response.data;
        console.log(this.rooms)
      });
    }
  }
