import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/core/services/api/api.service';
import { MyTask } from 'src/core/models/mytask.model';
import { User, UserType } from 'src/core/models/user.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { MyTaskRequest } from 'src/core/models/request/mytask-request.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class DeveloperTaskComponent implements OnInit {


  constructor(private apiService: ApiService,private messageService: MessageService) { }

  myTasks: MyTask[] = [];
  public taskRequest: MyTaskRequest = <MyTaskRequest>{}
  taskToEdit: MyTask | null = null;
  visible: boolean = false;
  users: User[] = [];
  usersMyTaskRol: User[] = [];

  ngOnInit() {
    // Görevleri ve kullanıcıları çek
    this.apiService.getAllEntities(MyTask).subscribe((taskResult) => {
      this.myTasks = taskResult.data;

    });
    this.apiService.getAllEntities(User).subscribe((userResult) => {
      this.users = userResult.data;
      this.usersMyTaskRol = userResult.data;
    });

  }
  // Kullanıcı adını kullanıcı kimliği ile bul
  findUserName(userId: number): string {
    const user = this.users.find((user) => user.id === userId);
    return user ? user.fullName : ''; // Kullanıcı adını göster veya boş bir dize döndür
  }
  getDeveloperUsers() {
    return this.usersMyTaskRol.filter((users) => users.userType === UserType.Developer);
  }


  //status durumu ayarla
  getStatusStringForTask(task: MyTask): string {
    switch (task.myTask_Status) {
      case 0:
        return 'Not Started';
      case 1:
        return 'In Progress';
      case 2:
        return 'Completed';
      default:
        return 'Unknown';
    }
  }

  refresh() {
    this.apiService.getAllEntities(MyTask).subscribe((response) => {
      this.myTasks = response.data;
      console.log(this.myTasks)
    });    
  }
 
}
