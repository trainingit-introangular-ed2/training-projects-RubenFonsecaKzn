import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ProjectsServiceService } from './projects-service.service';

@Injectable({
  providedIn: 'root'
})
export class LocalService implements ProjectsServiceService {
  public projects: Promise<any>;
  public project = { id: 0, name: '' };
  constructor() {}

  public create(projectName: string) {
    this.project.id = environment.projects.length;
    this.project.name = projectName;
    environment.projects.push({ ...this.project });
  }
  public read(): Promise<any> {
    const promise1 = new Promise(function(resolve, reject) {
      resolve(environment.projects);
    });
    return promise1;
  }
}
