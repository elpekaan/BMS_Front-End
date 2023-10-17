import { Component } from '@angular/core';
import { ApiService } from 'src/core/services/api/api.service';
import { Ticket } from 'src/core/models/ticket.model';
import { User } from 'src/core/models/user.model';
import { Room } from 'src/core/models/room.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {

  constructor(private apiService: ApiService,private router:Router) {}

  tickets: Ticket[] = [];
  users: User[] = [];
  rooms: Room[] = [];

  ngOnInit() {
    // Görevleri ve kullanıcıları çek
    this.apiService.getAllEntities(Ticket).subscribe((ticketResult) => {
      this.tickets = ticketResult.data;
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
  getStatusStringForTask(task: Ticket): string {
    switch (task.ticket_Status) {
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
  deleteTicketId(id: number) {
    this.apiService.deleteEntity(id,Ticket).then(response => {
      if (response?.status == ResponseStatus.Ok) {      }
      console.log(response);
      this.refresh();
    })
  }
  refresh() {
    this.apiService.getAllEntities(Ticket).subscribe((response) => {
      this.tickets = response.data;
      console.log(this.tickets)
    });
  }
}
