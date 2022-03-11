import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.url + '/users');
  }

  deleteUser(name: string): Observable<any> {
    return this.http.delete(this.url + '/users/' + name, {responseType: 'text'})
  }

  addUser(user: User): Observable<any> {
    return this.http.post(this.url + '/users', user, {responseType: 'text'}) ;
  }

  getUser(name: string): Observable<any> {
    return this.http.get(this.url + '/users/' + name);
  }

  editUser(name: string, user: User): Observable<any> {
    return this.http.put(this.url + '/users/' + name, user, {responseType: 'text'});
  }
}
