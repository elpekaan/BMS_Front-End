import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/core/services/api/api.service';
import { Ticket } from 'src/core/models/ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit{

  constructor(private apiService: ApiService) {}
  
  tickets: Ticket[] = [];

  ngOnInit() {
    this.apiService
      .getAllEntities(Ticket)
      .subscribe((result) => {
        this.tickets = result.data; 
        console.log(result.data);
      });
  }
}