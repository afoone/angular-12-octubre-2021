import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit {
  public patients: Patient[];

  constructor(public patientService: PatientService) {
    this.patients = [];
  }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((res) => (this.patients = res));
  }

  deleteItem = (id: number | undefined) => {
    if (!id) return;
    this.patientService.deletePatient(id + '').subscribe(() => {
      this.patients = this.patients.filter((i) => i.id !== id);
    });
  };
}
