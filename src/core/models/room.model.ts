import { Project } from "./project.model";
import { Ticket } from "./ticket.model";

export class Room {
    id: number = 0;
    userId: number = 0;
    room_Name: string = "";
    projects: Project[] = [];
    tickets: Ticket[] = [];
}