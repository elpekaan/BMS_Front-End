import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/core/services/api/api.service';
import { MyTask } from 'src/core/models/mytask.model';
import { User, UserType } from 'src/core/models/user.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { Router } from '@angular/router';
import { MyTaskRequest } from 'src/core/models/request/mytask-request.model';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {


  constructor(private apiService: ApiService) { }

  myTasks: MyTask[] = [];
  public taskRequest: MyTaskRequest = <MyTaskRequest>{}
  taskToEdit: MyTask | null = null;

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

  onCreate(entity: MyTaskRequest) {

    this.createEntity<MyTaskRequest>(entity, 'MyTask').then(response => {
      if (response?.status == ResponseStatus.Ok) {
        this.refresh();
        console.log(response.message);
        entity.userId=0;
        entity.myTask_Title="";
        entity.myTask_Status="",
        entity.myTask_Description=""
      }
    });
  }

  createEntity<TEntity>(entity: TEntity, entityType: string) {
    return this.apiService.createEntity<TEntity>(entity, entityType);
  }

  deleteTaskId(id: number) {
    this.apiService.deleteEntity(id, MyTask).then(response => {
      if (response?.status == ResponseStatus.Ok) { }
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


  //Güncellemek istediğimiz aracın bilgilerini çeken kod
  openEditDialog(id: number) {
    this.apiService.getEntityById<MyTask>(id, MyTask).then((response) => {
      if (response && response.data) {
        this.taskToEdit = response.data; // API'den alınan aracı carToEdit değişkenine atıyoruz
      } else {
        console.error('Task bulunamadı veya alınırken bir hata oluştu.');
      }
    }).catch((error) => {
      console.error('Task alınırken bir hata oluştu:', error);
    });
  }

  //Update işlemini gerçekleştiren kod
  onUpdate(id: number, updatedTask: MyTask) {
    this.update(id, updatedTask).then(response => {
      if (response?.status == ResponseStatus.Ok) {
        this.refresh();
        console.log(response.message);
   
      }
    }).catch((error) => {
      console.error('Araç güncellenirken bir hata oluştu:', error);
    });
  }

  //Update işlemini gerçekleştiren kod
  update(id: number, updatedTask: MyTask) {
    return this.apiService.updateEntity(id, updatedTask, MyTask);
  }




}
