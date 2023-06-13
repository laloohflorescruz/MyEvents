import { Injectable } from '@angular/core';
import { IUser } from '../IUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  currentUser: IUser | undefined

  constructor(private http: HttpClient){

  }

  loginUSer(userName: string, password: string) {

    let loginInfo = { username: userName, password: password };
    let options = { headers: new HttpHeaders({'Content-Type':'application/json'})};

    return this.http.post('/api/login', loginInfo, options)
    .pipe(tap(data => {
        this.currentUser = <IUser>data;
    }))
    .pipe(catchError(err => {
      return of(false)
    }))
   /* this.currentUser = {
      id: 1,
      firstName: 'Jonh',
      userName: 'jpapa',
      lastName: 'Papa',

    }*/
  }
  isAuthenticated() {
    return this.currentUser !== undefined && this.currentUser !== null;
  }
  updateCurrentUser(firstName: string, lastName: string) {
    if (this.currentUser) {
      this.currentUser.firstName = firstName;
      this.currentUser.lastName = lastName;
    }
  }

  checkAuthenticationStatus() {
    this.http.get('/api/currentIdentity')
    .pipe(tap(data => {
      if(data instanceof Object) {
        this.currentUser = <IUser>data;
      }
    }))
  }

  logout() {
    this.currentUser = undefined;
    let options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post('/api/logout', {}, options);
  }
}
