import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnosticFormComponent } from './components/diagnostic-form/diagnostic-form.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { PatientEditViewComponent } from './views/patient-edit-view/patient-edit-view.component';
import { PatientListViewComponent } from './views/patient-list-view/patient-list-view.component';
import { PatientNewViewComponent } from './views/patient-new-view/patient-new-view.component';
import { LoggedInGuard } from './guard/logged-in.guard';



const routes: Routes = [
  { path: '', redirectTo: 'patients/list', pathMatch: 'full' },
  { path: 'about', component: AboutViewComponent },
  {
    path: 'diagnostics/new',
    component: DiagnosticFormComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'patients/list',
    component: PatientListViewComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'patients/new',
    component: PatientNewViewComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'patients/:id',
    component: PatientEditViewComponent,
    canActivate: [LoggedInGuard],
  },
  { path: 'login', component: LoginComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
