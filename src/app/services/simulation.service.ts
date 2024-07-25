import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SimulationFormModel } from '../models/simulation-form-model';
import { Observable } from 'rxjs';
import { SimulationResultsModel } from '../models/simulation-results-model';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {
  private baseUrl = `${environment.baseUrl}/api/simulation`

  constructor(private http: HttpClient) { }

  startSimulation(form: SimulationFormModel): Observable<SimulationResultsModel> {
    return this.http.post<SimulationResultsModel>(this.baseUrl, form)
  }
}
