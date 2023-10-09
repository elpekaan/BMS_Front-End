export class Project {
    id: number = 0;
    userId: number = 0;
    roomId: number = 0;
    projectTitle: string = ''; 
    projectDescription: string = '';
    projectStatus: ProjectStatus = 0;
    projectDeadline: Date = new Date(); // Hata çıkarsa backendi düzelt. 
    // string de verebilirsin.
}

export enum ProjectStatus {
    NotStarted,
    InProgress,
    Completed
}