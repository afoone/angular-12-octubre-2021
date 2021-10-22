import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientListComponent } from './components/patient/patient-list/patient-list.component';
import { MalesPipe } from './pipes/males.pipe';
import { SumaPipe } from './pipes/suma.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    MalesPipe,
    SumaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
