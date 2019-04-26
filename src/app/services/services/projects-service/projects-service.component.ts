import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-projects-service',
  templateUrl: './projects-service.component.html',
  styleUrls: ['./projects-service.component.css']
})
export class ProjectsServiceComponent implements OnInit {
  public project = { id: 0, name: '' };
  private urlapi = environment.httpApi;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getCurrentEuroRates();
  }
  private getCurrentEuroRates() {
    this.project.id = 0;
    this.project.name = 'angular';
    this.httpClient.post(this.urlapi, this.project).subscribe();
  }
}
