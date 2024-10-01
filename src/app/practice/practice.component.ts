import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../services/medicine.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Medicine } from '../interfaces/medicine.interface';

import { debounceTime, switchMap } from 'rxjs';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  data: any;  
  errorMessage!: string;
  constructor( private medicineService: MedicineService) {}
  
    ngOnInit(): void {
      this.fetchData(); 
    }
  
    fetchData(): void {
      this.medicineService.getData().subscribe(
        response => {
          this.data = response;  // Store the response data
          console.log('Data received from API:', this.data);  // Log the data for debugging
        },
        error => {
          this.errorMessage = 'Error fetching data from API';  // Handle errors
          console.error(this.errorMessage, error);  // Log the error
        }
      );
    }
}


