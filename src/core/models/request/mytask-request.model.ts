import { MyTaskStatus } from "../mytask.model";

export interface MyTask {
    userId: number;
    mytaskTitle: string;
    mytaskDescription: string;
    mytaskDeadline: Date;
    mytaskStatus: MyTaskStatus;
}