import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit {
  public today = new Date();

  public n: number = 0.45;
  public n2: number = 3.1313;

  constructor(public patientService: PatientService) {}

  ngOnInit(): void {}
}
