import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const GMAP_KEY = 'AIzaSyCtUDhrA3nSUy8hzmbaCu0_hyK--DSB44Y';
declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GeocodeService {


  constructor(private httpC: HttpClient) { }

  public findCoordinatesByAddress(adresse: string): Observable<any> {
    adresse = this.formatStringsForGMapApis(adresse);

    return this.httpC.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + adresse + '&key=' + GMAP_KEY);

  }

  public formatStringsForGMapApis(myString: string): string {
    return myString.replace(/ /gi, '+');
  }


}
