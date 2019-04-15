import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public projectname = '';
  public project = { id: 0, name: '' };
  constructor() {}

  ngOnInit() {}

  public saveProject() {
    this.project.id = environment.projects.length;
    environment.projects.push({ ...this.project });
  }
}
