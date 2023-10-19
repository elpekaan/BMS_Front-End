export interface RequestProject {
    project_Title: string,
    project_Description: string,
    project_DeadLine: Date,
    project_Status: projectStatus,
    userId: number,
    roomId: number
}
export enum projectStatus {
    NotStarted,
    InProgress,
    Completed
}
