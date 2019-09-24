import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eolien } from 'src/model/eolien';


const EOLIEN_SERVER = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class EolienServiceService {

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public getAllEoliens(): Observable<any> {
    return this.http
    .get<Eolien>(EOLIEN_SERVER + '/eolien/allEolien');
  }

  public addNewEolien(eolien: Eolien): Observable <any> {
    return this.http.post<Eolien>(EOLIEN_SERVER + '/eolien/addEolien', JSON.stringify(eolien), this.httpOption);
  }
}
