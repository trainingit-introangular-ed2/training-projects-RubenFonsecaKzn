import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ProjectsServiceService } from '../../services/services/projects-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public projects = environment.projects;

  constructor(private projectService: ProjectsServiceService) {}

  async ngOnInit() {
    this.projects = await this.projectService.read();
    environment.projects = this.projects;
  }
}
