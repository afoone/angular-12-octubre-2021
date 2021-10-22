import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private patients: Array<Patient>;

  constructor() {
    this.patients = [
      {
        name: 'Joe Smith',
        sex: 'M',
        age: 54,
        hourlyRate: 40,
        diagnostics: ['malaria'],
      },
      {
        name: 'Susan Smith',
        sex: 'F',
        age: 54,
        hourlyRate: 45,
        diagnostics: ['covid19', 'malaria'],
      },
      {
        name: 'Babou Ceesay',
        sex: 'M',
        age: 27,
        hourlyRate: 20,
        diagnostics: ['malaria'],
      },
      {
        name: 'niña',
        sex: 'F',
        age: 10,
        hourlyRate: 20,
        diagnostics: ['malaria'],
      },
      {
        name: 'niño',
        sex: 'M',
        age: 12,
        hourlyRate: 20,
        diagnostics: ['malaria'],
      },
    ];
  }

  getPatients(): Array<Patient> {
    return this.patients;
  }
}
