import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
})
export class PatientFormComponent implements OnInit {
  public patient: Patient;

  @Input('id')
  public patientId: string | undefined;

  @Output() public finish: EventEmitter<Patient | undefined> =
    new EventEmitter();

  constructor(private patientService: PatientService) {
    this.patient = {
      diagnostics: [],
      name: '',
    };
  }

  ngOnInit(): void {
    if (this.patientId) {
      this.patientService
        .getPatient(this.patientId)
        .subscribe((res) => (this.patient = res));
    }
  }

  onSubmit(): void {
    if (!this.patientId) {
      this.patientService
        .addPatient(this.patient)
        .subscribe((res) => this.finish.emit(res));
    } else {
      this.patientService
        .updatePatient(this.patient)
        .subscribe((res) => this.finish.emit(res));
    }
  }

  onCandel(): void {
    this.finish.emit();
  }
}
