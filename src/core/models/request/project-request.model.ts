import { ProjectStatus } from "../project.model";

export interface RequestProject{
userId: number;
roomId: number;
project_Title: string;
project_Description: string;
project_DeadLine: string;
project_Status: ProjectStatus
}
