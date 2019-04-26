import { Component, OnInit } from '@angular/core';
import { ProjectsServiceService } from '../../services/services/projects-service.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  constructor(private projectService: ProjectsServiceService) {}

  ngOnInit() {}

  public OnSaveProject(projectName: string) {
    this.projectService.create(projectName);
  }
}
