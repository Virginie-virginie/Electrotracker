import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client_F } from 'src/model/Client_F';


const ELECTRO_TRACKER_SERVER = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  client: Client_F;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: no-shadowed-variable
  public findByAddress(Adresse: string): Observable<any> {
    return this.http
      .get<Client_F>(ELECTRO_TRACKER_SERVER + '/clients/' + Adresse);
  }

}
