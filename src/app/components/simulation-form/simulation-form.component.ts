import { Component, OnInit } from '@angular/core';
import { SimulationFormModel } from 'src/app/models/simulation-form-model';
import { SimulationResultsModel } from 'src/app/models/simulation-results-model';
import { SimulationService } from 'src/app/services/simulation.service';

@Component({
  selector: 'simulation-form',
  templateUrl: './simulation-form.component.html',
  styleUrls: ['./simulation-form.component.css']
})
export class SimulationFormComponent implements OnInit {
  form: SimulationFormModel
  results: SimulationResultsModel | null;

  constructor(private _simulationService: SimulationService) {
    this.form = {
      arrivalRate: 1,
      warmResponseTime: 1,
      coldResponseTime: 0,
      threshold: 60,
      simulationTime: 600
    }
    this.results = null;
  }

  ngOnInit(): void {
  }

  runSimulation() {
    this._simulationService.startSimulation(this.form).subscribe((res: SimulationResultsModel) => {
      this.results = res;
    })
  }

  clearSimulation() {
    this.results = null;
  }

}
