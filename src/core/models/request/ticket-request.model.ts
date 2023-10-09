import { TicketStatus } from "../ticket.model";

export interface TicketRequest {
    ticketContent: string;
    roomId: number;
    userId: number;
    ticketStatus: TicketStatus;
}