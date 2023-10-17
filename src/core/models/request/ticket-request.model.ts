import { TicketStatus } from "../ticket.model";

export interface TicketRequest {
    ticket_Content: string;
    roomId: number;
    userId: number;
    ticket_Status: TicketStatus;
}
