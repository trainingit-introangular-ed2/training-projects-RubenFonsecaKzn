import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClientService } from '../services/services/http-client.service';
import { LocalService } from '../services/services/local.service';
import { ProjectsServiceService } from '../services/services/projects-service.service';
import { HomeComponent } from './home/home.component';

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
    component: HomeComponent
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
export class HomeRoutingModule {}
