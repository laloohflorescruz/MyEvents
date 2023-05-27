import { Injectable } from '@angular/core';
import { IUser } from '../IUser';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  currentUser: IUser | undefined
  loginUSer(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'Jonh',
      userName: 'jpapa',
      lastName: 'Papa',

    }
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
}
