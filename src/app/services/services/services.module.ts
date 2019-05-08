import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuditInterceptorService } from './audit-interceptor.service';
import { ProjectsServiceComponent } from './projects-service/projects-service.component';
import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
  declarations: [ProjectsServiceComponent],
  imports: [CommonModule, ServicesRoutingModule, HttpClientModule],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuditInterceptorService,
    multi: true
    }
   ] 
})
export class ServicesModule {}
