import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './study-http/components/course-list.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full'},
  { path: 'courses',      component: CourseListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
