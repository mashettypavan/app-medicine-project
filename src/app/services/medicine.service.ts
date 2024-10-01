import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medicine } from '../interfaces/medicine.interface';
@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private medicine_api = "https://api.evitalrx.in/v1/fulfillment/medicines/view";
  private api_key = environment.apiKey;

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.api_key}`, // Use the API key in the Authorization header
      'Content-Type': 'application/json'
    });

    return this.httpClient.get(this.medicine_api, { headers });
  }

  // Example method to POST data to the API
  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.api_key}`, // Use the API key in the Authorization header
      'Content-Type': 'application/json'
    });

    return this.httpClient.post(this.medicine_api, data, { headers });
  }
}
