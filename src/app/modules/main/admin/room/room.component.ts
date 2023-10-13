import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/core/services/api/api.service';
import { Room } from 'src/core/models/room.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit{

  constructor(private apiService: ApiService) {}
  
  rooms: Room[] = [];
  
  ngOnInit() {
    this.apiService
      .getAllEntities(Room)
      .subscribe((response) => {
        this.rooms = response.data; 
        console.log(this.rooms);
      });
  }
}