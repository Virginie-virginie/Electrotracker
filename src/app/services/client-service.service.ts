import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client_F } from 'src/model/Client_F';

const RECIPE_SERVER = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public getAllClients(): Observable<any> {
    return this.http
      .get<Client_F>(RECIPE_SERVER + '/clients/all');

  }

  // tslint:disable-next-line: variable-name
  public getClientById(id_Client: number): Observable<any> {
    return this.http
      .get<Client_F>(RECIPE_SERVER + '/clients/' + id_Client);
  }

  public createClient(client: Client_F): Observable<any> {
    return this.http.post<Client_F>(RECIPE_SERVER + '/clients/addClient', JSON.stringify(client), this.httpOptions);
  }

  public updateClient(client: Client_F): Observable<any> {
    return this.http.put<Client_F>(RECIPE_SERVER + '/clients/' + client.id_Client, JSON.stringify(client),
     this.httpOptions);

  }

  public deleteClient(client: Client_F): Observable<any> {
    return this.http.delete<Client_F>(RECIPE_SERVER + '/clients/' + client.id_Client);
  }

}
