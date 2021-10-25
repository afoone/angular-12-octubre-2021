import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
})
export class PatientFormComponent implements OnInit {
  public patient: Patient;

  constructor() {
    this.patient = {
      diagnostics: [],
      name: '',
    };
  }

  ngOnInit(): void {}
}
