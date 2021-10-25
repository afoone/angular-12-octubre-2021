import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientListComponent } from './components/patient/patient-list/patient-list.component';
import { AboutComponent } from './components/about/about.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { PatientListViewComponent } from './views/patient-list-view/patient-list-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { PatientNewViewComponent } from './views/patient-new-view/patient-new-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    AboutComponent,
    AboutViewComponent,
    PatientListViewComponent,
    NavbarComponent,
    PatientFormComponent,
    PatientNewViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
