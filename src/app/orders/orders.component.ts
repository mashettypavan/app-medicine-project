import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  patientData: any;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    // Subscribe to the patient data from the service
    this.patientService.patientData$.subscribe(data => {
      this.patientData = data;
    });
  }
}
