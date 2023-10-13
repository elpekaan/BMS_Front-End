export class Project {
    id: number = 0;
    userId: number = 0;
    roomId: number = 0;
    project_Title: string = "";
    project_Description: string = '';
    project_Status: ProjectStatus = 0;
    project_Deadline: string =""; // Hata çıkarsa backendi düzelt.
    // string de verebilirsin.
}

export enum ProjectStatus {
    NotStarted,
    InProgress,
    Completed
}
