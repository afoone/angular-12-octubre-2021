import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diagnostic } from '../models/diagnostic';

@Injectable({
  providedIn: 'root',
})
export class DiagnosticServiceService {
  constructor(private http: HttpClient) {}

  saveDiagnostic = (diagnostic: Diagnostic): Observable<Diagnostic> => {
    return this.http.post<Diagnostic>(
      'http://localhost:4000/diagnostics',
      diagnostic
    );
  };
}
