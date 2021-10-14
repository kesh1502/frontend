
import { Injectable, } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  constructor(private userService: UserService) { }
 
  isLoggedIn(): boolean {
    const tken = localStorage.getItem('tokenID');
    if (localStorage.getItem("token") === null) {
      //...
      return false;
    }else{
      return true;

    }

  }
}