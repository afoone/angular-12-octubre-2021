import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
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
import { PatientEditViewComponent } from './views/patient-edit-view/patient-edit-view.component';
import { DiagnosticFormComponent } from './components/diagnostic-form/diagnostic-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { LoggedInGuard } from './guard/logged-in.guard';
import { AuthService } from './services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ImaginaButtonComponent } from './components/imagina-button/imagina-button.component';

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
    PatientEditViewComponent,
    DiagnosticFormComponent,
    LoginComponentComponent,
    ImaginaButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
  ],
  providers: [{ provide: AuthService, useClass: AuthService }, LoggedInGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
