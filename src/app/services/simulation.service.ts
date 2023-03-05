import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SimulationFormModel } from '../models/simulation-form-model';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {
  private baseUrl = `${environment.baseUrl}/api/simulation`

  constructor(private http: HttpClient) { }

  startSimulation(form: SimulationFormModel) {
    console.log('form',form)
    console.log('baseUrl',this.baseUrl)
    return this.http.post(this.baseUrl, form)
  }
}
