import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public project = { id: 0, name: '' };
  constructor() {}

  ngOnInit() {}

  public OnSaveProject(projectName: string) {
    this.project.id = environment.projects.length;
    this.project.name = projectName;
    environment.projects.push({ ...this.project });
  }
}
