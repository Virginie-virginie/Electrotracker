import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mail } from 'src/model/mail';

const ELECTRO_TRACKER_SERVER = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class MailService {
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}


  public envoieMail(mail: Mail): Observable<any> {
    return this.http.post<Mail>(ELECTRO_TRACKER_SERVER + '/mail/send', JSON.stringify(mail), this.httpOption);
  }
}
