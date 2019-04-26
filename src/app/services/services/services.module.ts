import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProjectsServiceComponent } from './projects-service/projects-service.component';
import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
  declarations: [ProjectsServiceComponent],
  imports: [CommonModule, ServicesRoutingModule, HttpClientModule]
})
export class ServicesModule {}
