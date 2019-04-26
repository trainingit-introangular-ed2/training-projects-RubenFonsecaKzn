import { Injectable } from '@angular/core';
import { ProjectsManager } from './projects-manager';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServiceService implements ProjectsManager {
  create(projectName: string) {}
  read(): Promise<any> {
    return;
  }
  constructor() {}
}
