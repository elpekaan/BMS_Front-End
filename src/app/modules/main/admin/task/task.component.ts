import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/core/services/api/api.service';
import { MyTask } from 'src/core/models/mytask.model';
import { User } from 'src/core/models/user.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  constructor(private apiService: ApiService,private router:Router) {}

  myTasks: MyTask[] = [];
  users: User[] = [];

  ngOnInit() {
    // Görevleri ve kullanıcıları çek
    this.apiService.getAllEntities(MyTask).subscribe((taskResult) => {
      this.myTasks = taskResult.data;
      this.apiService.getAllEntities(User).subscribe((userResult) => {
        this.users = userResult.data;
      });
    });
  }
    // Kullanıcı adını kullanıcı kimliği ile bul
    findUserName(userId: number): string {
      const user = this.users.find((user) => user.id === userId);
      return user ? user.fullName : ''; // Kullanıcı adını göster veya boş bir dize döndür
    }


//status durumu ayarla
  getStatusStringForTask(task: MyTask): string {
    switch (task.myTask_Status) {
      case 0:
        return 'Not Started';
      case 1 :
        return 'In Progress';
      case 2:
        return 'Completed';
      default:
        return 'Unknown';
    }
  }
  deleteTaskId(id: number) {
    this.apiService.deleteEntity(id,MyTask).then(response => {
      if (response?.status == ResponseStatus.Ok) {      }
      console.log(response);
      this.refresh();
    })
  }
  refresh() {
    this.apiService.getAllEntities(MyTask).subscribe((response) => {
      this.myTasks = response.data;
      console.log(this.myTasks)
    });
  }
}
