import { Component, OnInit } from '@angular/core';
import { GeocodeService } from '../../services/geocode.service';
import { Router } from '@angular/router';
import { AddressService } from '../../services/address.service';
import { Adresse } from 'src/model/Client_F';


@Component({
  selector: 'app-adress-tosearch',
  templateUrl: './adress-tosearch.component.html',
  styleUrls: ['./adress-tosearch.component.css']
})
export class AdressTosearchComponent implements OnInit {


  address: string;

  Adresse: Adresse;
  constructor(private geoCodeServ: GeocodeService, private route: Router, private addressService: AddressService) {

  }

  ngOnInit() {
  }

  /*public matchAddress(Adresse: Adresse): void {
    this.addressService.findByAddress(this.address).subscribe(
      (response) => {
        this.address = response;
      }
    );
  }*/

  public searchCoordinates() {
    this.geoCodeServ.findCoordinatesByAddress(this.address).subscribe(
      (response) => {
        console.log(response.results[0].geometry.location.lat);
        console.log(response.results[0].geometry.location.lng);
        localStorage.setItem('lat', response.results[0].geometry.location.lat);
        localStorage.setItem('lng', response.results[0].geometry.location.lng);
        this.route.navigateByUrl('eolien');
      }
    );
  }

}
