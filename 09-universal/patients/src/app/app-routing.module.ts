import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnosticFormComponent } from './components/diagnostic-form/diagnostic-form.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { PatientEditViewComponent } from './views/patient-edit-view/patient-edit-view.component';
import { PatientListViewComponent } from './views/patient-list-view/patient-list-view.component';
import { PatientNewViewComponent } from './views/patient-new-view/patient-new-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'patients/list', pathMatch: 'full' },
  { path: 'about', component: AboutViewComponent },
  { path: 'diagnostics/new', component: DiagnosticFormComponent },
  { path: 'patients/list', component: PatientListViewComponent },
  { path: 'patients/new', component: PatientNewViewComponent },
  { path: 'patients/:id', component: PatientEditViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
