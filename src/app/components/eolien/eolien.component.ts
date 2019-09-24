import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EolienServiceService } from '../../services/eolien-service.service';
import { GeocodeService } from 'src/app/services/geocode.service';
import { Adress } from 'src/model/adress';
import { Eolien } from 'src/model/eolien';

@Component({
  selector: 'app-eolien',
  templateUrl: './eolien.component.html',
  styleUrls: ['./eolien.component.css']
})
export class EolienComponent implements OnInit {

  constructor(private router: Router, private eolienService: EolienServiceService, private geoCodeServ: GeocodeService) {
    this.eoliens = [];
  }

  title = 'ElectroTracker Eoliens';
  lat;
  lng;
  lat0 = 48.1158943;
  lng0 = -1.7584942;
  zoom = 10;
  color = 'green';
  eoliens: Eolien[];
  ad: Adress;

  public getAllEolien(): void {
    this.eolienService.getAllEoliens().subscribe(
      (response) => {
        this.eoliens = response;
        console.log(response);
      }
    );
  }

  ngOnInit(): void {
    this.getAllEolien();
    if (this.lat !== 0 && this.lng !== 0) {
      this.lat = parseFloat(localStorage.getItem('lat'));
      this.lng = parseFloat(localStorage.getItem('lng'));
      localStorage.clear();
    } else {
      this.lat = this.lat0;
      this.lng = this.lng0;
    }

    console.log('on est dans leolieeen');
    console.log(this.lat);
  }

}

