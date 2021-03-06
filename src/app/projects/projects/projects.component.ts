import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { StoreService } from '../../notifications/store.service';
import { ProjectsServiceService } from '../../services/services/projects-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects;
  public project = { id: '', name: '' };
  constructor(private projectService: ProjectsServiceService, private store: StoreService) {}

  async ngOnInit() {
    this.projects = await this.projectService.read();
    this.store.dispathNotification('Read Projects');
    if (this.projects != null) {
      environment.projects = this.projects;
    }
  }

  public OnFilterProjects(projectName: string) {
    if (projectName === '') {
      this.projects = environment.projects;
    } else {
      const filterProject = environment.projects.filter(project => project.name === projectName);
      this.projects = filterProject;
    }
  }
}
