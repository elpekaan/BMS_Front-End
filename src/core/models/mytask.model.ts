export class MyTask {
    id: number = 0;
    userId: number = 0;
    mytaskTitle: string = '';
    mytaskDescription: string = '';
    mytaskStatus: MyTaskStatus = 0;
    mytaskDeadline: Date = new Date(); // Hata çıkarsa backendi düzelt. 
    // string de verebilirsin.
}

export enum MyTaskStatus {
    NotStarted,
    InProgress,   
    Completed 
}