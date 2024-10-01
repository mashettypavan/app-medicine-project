import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  bookForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private patientService: PatientService) {
    this.bookForm = this.fb.group({
     
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(5), Validators.maxLength(50)]),
      city: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(50)]),
      state: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(50)]),
     address: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 /-]+$'), Validators.minLength(5), Validators.maxLength(50)]),
      code: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(6)]),
      number: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
    
    });
  }

  get addressControl() {
    return this.bookForm.get('address') as FormControl;
  }
  get nameControl(): FormControl {
    return this.bookForm.get('name') as FormControl;
  }
  get cityControl(): FormControl {
    return this.bookForm.get('city') as FormControl;
  }
  get stateControl(): FormControl {
    return this.bookForm.get('state') as FormControl;
  }
  
  get codeControl(): FormControl {
    return this.bookForm.get("code") as FormControl;
  }
  get numberControl(): FormControl {
    return this.bookForm.get("number") as FormControl;
  }
 

  onKeyPress(event: KeyboardEvent): void {
    const char = String.fromCharCode(event.charCode);
    if (!/[0-9]/.test(char)) {
      event.preventDefault(); // Prevents non-numeric input
    }
  }
  
  onKeyPresss(event: KeyboardEvent): void {
    const char = String.fromCharCode(event.charCode);
    if (!/[a-zA-Z\s]/.test(char)) {
      event.preventDefault(); // Prevents non-alphabetic input
    }
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.bookForm.valid) {
     
      this.patientService.setPatientData(this.bookForm.value);
     
      this.router.navigate(['/orders']);
    }
  }
}
