import { Injectable } from '@angular/core';
import { IUser } from '../IUser';

// @Injectable({
//   providedIn: 'root'
// })
export class AuthService {
  currentUser: IUser | undefined
  loginUSer(userName: string, password:string) {
    this.currentUser = {
      id: 1,
      firstName: 'Jonh',
      userName: 'jpapa',
      lastName: 'Papa',
      
    }
  }
  isAuthenticated(){
    return !!this.currentUser;
  }
  updateCurrentUser(
    firstName: string, lastName:string) {
    /*this.currentUser.firstName = firstName
    this.currentUser.lastName= lastName*/
    console.log('USers');
  }

  // constructor(){

  // }
}
