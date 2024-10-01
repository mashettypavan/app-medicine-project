import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patientData = new BehaviorSubject<any>(null);
  patientData$ = this.patientData.asObservable();

  constructor() {}

  setPatientData(data: any) {
    this.patientData.next(data);
  }
}
