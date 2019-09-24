import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../model/User';

const RECIPE_SERVER = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<any> {
    return this.http
      .get<User>(RECIPE_SERVER + '/users/all');

  }

    // tslint:disable-next-line: variable-name
    public getUserById(id_User: number): Observable<any> {
      return this.http
        .get<User>(RECIPE_SERVER + '/users/' + id_User);
    }

    public createUser(user: User): Observable<any> {
      return this.http.post<User>(RECIPE_SERVER + '/users/addUser', JSON.stringify(user), this.httpOptions);
    }

    public updateUser(user: User): Observable<any> {
      return this.http.put<User>(RECIPE_SERVER + '/users/' + user.id_User, JSON.stringify(user),
       this.httpOptions);

    }

    public deleteUser(user: User): Observable<any> {
      console.log(user);
      return this.http.delete<User>(RECIPE_SERVER + '/users/' + user.id_User);
    }
}
