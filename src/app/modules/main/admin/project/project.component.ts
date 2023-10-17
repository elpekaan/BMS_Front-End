import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/core/services/api/api.service';
import { Project } from 'src/core/models/project.model';
import { User } from 'src/core/models/user.model';
import { Room } from 'src/core/models/room.model';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit{

  constructor(private apiService: ApiService) {}

  projects: Project[] = [];
  users : User[] = [];
  rooms : Room[] = [];

  ngOnInit() {
    // Görevleri ve kullanıcıları çek
    this.apiService.getAllEntities(Project).subscribe((projectResult) => {
      this.projects = projectResult.data;
        this.apiService.getAllEntities(User).subscribe((userResult) => {
          this.users = userResult.data;
            this.apiService.getAllEntities(Room).subscribe((roomResult)=>{
              this.rooms = roomResult.data;
          })
      });
    });
  }
  findUserName(userId: number): string {
    const user = this.users.find((user) => user.id === userId);
    return user ? user.fullName : ''; // Kullanıcı adını göster veya boş bir dize döndür
  }
  findRoomName(roomId: number): string {
    const room = this.rooms.find((room) => room.id === roomId);
    return room ? room.room_Name : ''; // Kullanıcı adını göster veya boş bir dize döndür
  }
    getStatusStringForTask(task: Project): string {
    switch (task.project_Status) {
      case 0:
        return 'Not Started';
      case 1 :
        return 'In Progress';
      case 2:
        return 'Completed';
      default:
        return 'Unknown';
    }
  }
}
