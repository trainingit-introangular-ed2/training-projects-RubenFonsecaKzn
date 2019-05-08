import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreService } from './notifications/store.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'projects',
    loadChildren: './projects/projects.module#ProjectsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [StoreService]
})
export class AppRoutingModule {}
