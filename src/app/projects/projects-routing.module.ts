import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClientService } from '../services/services/http-client.service';
import { LocalService } from '../services/services/local.service';
import { ProjectsServiceService } from '../services/services/projects-service.service';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectComponent } from './viewer-project/viewer-project.component';

const projectsFactory = () => {
  if (environment.projectsServiceOption === 'HttpClient') {
    return new HttpClientService();
  } else {
    return new LocalService();
  }
};

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'viewer-project/:id/:name',
        component: ViewerProjectComponent
      },
      {
        path: 'new-project',
        component: NewProjectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: ProjectsServiceService,
      useFactory: projectsFactory
    }
  ]
})
export class ProjectsRoutingModule {}
