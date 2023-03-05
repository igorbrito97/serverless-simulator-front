import { Component, OnInit } from '@angular/core';
import { SimulationFormModel } from 'src/app/models/simulation-form-model';
import { SimulationService } from 'src/app/services/simulation.service';

@Component({
  selector: 'simulation-form',
  templateUrl: './simulation-form.component.html',
  styleUrls: ['./simulation-form.component.css']
})
export class SimulationFormComponent implements OnInit {
  form: SimulationFormModel
  constructor(private _simulationService: SimulationService) {
    this.form = {
      arrivalRate: 0,
      warmResponseTime: 1,
      coldResponseTime: 0,
      threshold: 0,
      simulationTime: 0,
      skipInitialTime: 0
    }
  }

  ngOnInit(): void {
  }

  runSimulation() {
    console.log("COMECANDO A RODA!")
    this._simulationService.startSimulation(this.form).subscribe(res => {
      console.log("TERMINANDMOS DE RODAR MEU PARÇA")
    })
  }

}
