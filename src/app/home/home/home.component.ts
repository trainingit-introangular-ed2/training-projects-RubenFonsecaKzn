import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { StoreService } from '../../notifications/store.service';
import { ProjectsServiceService } from '../../services/services/projects-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public projects;

  constructor(private projectService: ProjectsServiceService, private store: StoreService) {}

  async ngOnInit() {
    this.projects = await this.projectService.read();
    this.store.dispathNotification('Read Projects');
    if (this.projects != null) {
      environment.projects = this.projects;
    }
  }
}
