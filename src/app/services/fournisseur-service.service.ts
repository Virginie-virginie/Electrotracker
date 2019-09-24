import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Fournisseur } from 'src/model/Fournisseur';
import { Observable } from 'rxjs';

const RECIPE_SERVER = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class FournisseurServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public getAllFournisseurs(): Observable<any> {
    return this.http
      .get<Fournisseur>(RECIPE_SERVER + '/fournisseurs/all');

  }

  // tslint:disable-next-line: variable-name
  public getFournisseurById(id_Fournisseur: number): Observable<any> {
    return this.http
      .get<Fournisseur>(RECIPE_SERVER + '/fournisseurs/' + id_Fournisseur);
  }

  public createFournisseur(fournisseur: Fournisseur): Observable<any> {
    return this.http.post<Fournisseur>(RECIPE_SERVER + '/fournisseurs/addFournisseur', JSON.stringify(fournisseur), this.httpOptions);
  }

  public updateFournisseur(fournisseur: Fournisseur): Observable<any> {
    return this.http.put<Fournisseur>(RECIPE_SERVER + '/fournisseurs/' + fournisseur.id_Fournisseur, JSON.stringify(fournisseur),
     this.httpOptions);

  }

  public deleteFournisseur(fournisseur: Fournisseur): Observable<any> {
    console.log(fournisseur);
    return this.http.delete<Fournisseur>(RECIPE_SERVER + '/fournisseurs/' + fournisseur.id_Fournisseur);
  }

}
