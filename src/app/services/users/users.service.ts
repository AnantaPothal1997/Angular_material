import { Injectable } from '@angular/core';
import { User } from '../../models/userModel/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private userData: User[] = [
    {
       id : 1 , name : "ananta", age:12, indian : true, address: {
        state: "odisha",
        pin: 756119,
        country :"india"
      }
    },
    {
      id : 2 , name : "pothal", age:12, indian : true, address: {
       state: "odisha",
       pin: 756119,
       country :"india"
     }
   }

  ];

  getUser(): User[] {
    //return user array
    return this.userData;
  }

}
