import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
})
export class PatientFormComponent implements OnInit {
  public patient: Patient;

  @Output() public finish: EventEmitter<Patient | undefined> =
    new EventEmitter();

  constructor(private patientService: PatientService) {
    this.patient = {
      diagnostics: [],
      name: '',
    };
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.patientService
      .addPatient(this.patient)
      .subscribe((res) => this.finish.emit(res));
  }

  onCandel(): void {
    this.finish.emit();
  }
}
