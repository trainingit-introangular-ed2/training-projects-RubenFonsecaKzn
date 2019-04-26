import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ProjectsServiceService } from './projects-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService implements ProjectsServiceService {
  isIncognito: boolean = null;

  public result;
  public project = { id: 0, name: '' };
  private urlapi = environment.httpApi;
  private httpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));

  constructor() {}

  public create(projectName: string) {
    this.project.id = environment.projects.length;
    this.project.name = projectName;
    this.httpClient.post(this.urlapi, this.project).subscribe();
    environment.projects.push({ ...this.project });
  }

  async read(): Promise<any> {
    const response = await this.httpClient.get(this.urlapi).toPromise();
    return response;
  }
}
