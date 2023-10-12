import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/core/services/api/api.service';
import { MyTask } from 'src/core/models/mytask.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{
  
  constructor(private apiService: ApiService) {}
  
  myTasks: MyTask[] = [];
  
  ngOnInit() {
    this.apiService
      .getAllEntities(MyTask)
      .subscribe((result) => {
        this.myTasks = result.data; 
        console.log(result.data);
      });
  }
}
