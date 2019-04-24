import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectComponent } from './viewer-project/viewer-project.component';
import { NewProjectFormComponent } from './new-project/new-project-form/new-project-form.component';
import { ViewerProjectFormComponent } from './viewer-project/viewer-project-form/viewer-project-form.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { FilterProjectsFormComponent } from './projects/filter-projects-form/filter-projects-form.component';

@NgModule({
  declarations: [ProjectsComponent, ViewerProjectComponent, NewProjectComponent, NewProjectFormComponent, ViewerProjectFormComponent, ProjectsListComponent, FilterProjectsFormComponent],
  imports: [CommonModule, ProjectsRoutingModule, FormsModule]
})
export class ProjectsModule {}
