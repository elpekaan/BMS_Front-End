export class Ticket {
    id: number = 0;
    userId: number = 0;
    roomId: number = 0;
    ticketContent: string = '';
    ticketStatus: TicketStatus =0;
}

export enum TicketStatus {
    NotStarted,
    InProgress,
    Completed
}