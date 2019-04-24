import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects = environment.projects;
  public project = { id: '', name: '' };
  constructor() {}

  ngOnInit() {}

  public OnFilterProjects(projectName: string) {
    if (projectName === '') {
      this.projects = environment.projects;
    } else {
      const filterProject = this.projects.filter(project => project.name === projectName);
      this.projects = filterProject;
    }
  }
}
