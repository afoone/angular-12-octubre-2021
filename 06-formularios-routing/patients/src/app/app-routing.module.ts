import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { PatientListViewComponent } from './views/patient-list-view/patient-list-view.component';
import { PatientNewViewComponent } from './views/patient-new-view/patient-new-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'patients/list', pathMatch: 'full' },
  { path: 'about', component: AboutViewComponent },
  { path: 'patients/list', component: PatientListViewComponent },
  { path: 'patients/new', component: PatientNewViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
