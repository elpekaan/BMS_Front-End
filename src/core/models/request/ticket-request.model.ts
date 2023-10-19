export interface TicketRequest {
    ticket_Content: string,
    roomId: number,
    userId: number,
    ticket_Status: ticketStatus
}
export enum ticketStatus {
    NotStarted,
    InProgress,
    Completed
}
