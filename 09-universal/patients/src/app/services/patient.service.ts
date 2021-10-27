import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}

  getPatients() {
    return this.http.get<Array<Patient>>('http://localhost:4000/patients');
  }

  getPatient = (id: string): Observable<Patient> => {
    return this.http.get<Patient>(`http://localhost:4000/patients/${id}`);
  };

  deletePatient = (id: string): Observable<any> => {
    return this.http.delete(`http://localhost:4000/patients/${id}`);
  };

  addPatient = (patient: Patient): Observable<Patient> => {
    return this.http.post<Patient>('http://localhost:4000/patients', patient);
  };

  updatePatient = (patient: Patient): Observable<Patient> => {
    return this.http.put<Patient>(
      `http://localhost:4000/patients/${patient.id}`,
      patient
    );
  };
}
