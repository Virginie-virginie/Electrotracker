import { Component, OnInit } from '@angular/core';
import { OffresServiceService } from '../../services/offres-service.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private offreService: OffresServiceService) { }

  public canvasWidth = 300;
  public consommation_client_F = 50;
  public centralLabel = 'kWh';
  public name = 'Consommation moyenne de la France';
  public bottomLabel = '65';
  public options = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['rgb(0, 204, 68)', 'lightgray'],
    arcDelimiters: [this.consommation_client_F],
    rangeLabel: ['0', '4770'],
    arcStartValue: 0,
    needleStartValue: 0,
    };

  // Doughnut
  public doughnutChartLabels: string[] = ['Nuclaire', 'Parcs Eoliens', 'Biomasse'];
  public demodoughnutChartData: number[] = [450, 200, 100];
  public doughnutChartType = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit() {
  }


 /* public getConsommation(): void {
    this.offreService.  // methode get consommation client_F

  }

  public getOrigine(): void {
    this.offreService.  // methode get origine offre

  }*/
}
