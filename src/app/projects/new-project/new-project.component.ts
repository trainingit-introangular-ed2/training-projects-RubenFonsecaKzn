import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../notifications/store.service';
import { ProjectsServiceService } from '../../services/services/projects-service.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  constructor(private projectService: ProjectsServiceService, private store: StoreService) {}

  ngOnInit() {}

  public OnSaveProject(projectName: string) {
    this.projectService.create(projectName);
    this.store.dispathNotification('Created: ' + projectName);
  }
}
