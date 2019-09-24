import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Offre } from 'src/model/Offre';
import { Observable } from 'rxjs';

const RECIPE_SERVER = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class OffresServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public getAllOffre(): Observable<any> {
    return this.http
      .get<Offre>(RECIPE_SERVER + '/offres/all');

  }

  // tslint:disable-next-line: variable-name
  public getOffreById(id: number): Observable<any> {
    return this.http
      .get<Offre>(RECIPE_SERVER + '/offres/' + id);
  }

  public createOffre(offre: Offre): Observable<any> {
    return this.http.post<Offre>(RECIPE_SERVER + '/offres/addOffre', JSON.stringify(offre), this.httpOptions);
  }

  public updateOffre(offre: Offre): Observable<any> {
    return this.http.put<Offre>(RECIPE_SERVER + '/offres/' + offre.id, JSON.stringify(offre),
     this.httpOptions);

  }

  public deleteOffre(offre: Offre): Observable<any> {
    return this.http.delete<Offre>(RECIPE_SERVER + '/offres/' + offre.id);
  }

}
