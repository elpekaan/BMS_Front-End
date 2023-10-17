import { MyTaskStatus } from "../mytask.model";

export interface MyTaskRequest {
    userId: number;
    mytask_Title: string;
    mytask_Description: string;
    mytask_DeadLine: Date;
    mytask_Status: MyTaskStatus;
}
