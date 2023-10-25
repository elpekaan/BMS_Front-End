import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/core/services/api/api.service';
import { Project } from 'src/core/models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class TeamLeadProjectComponent implements OnInit{

  constructor(private apiService: ApiService) {}
  
  projects: Project[] = [];
  
  ngOnInit() {
    this.apiService
      .getAllEntities(Project)
      .subscribe((result) => {
        this.projects = result.data; 
        console.log(result.data);
      });
  }
}
