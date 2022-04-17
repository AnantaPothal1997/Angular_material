import { Component, OnInit } from '@angular/core';
import { User } from '../models/userModel/user';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  user: User[] = [];

  constructor(private userService: UsersService) {
    this.user = this.userService.getUser();
   }

  ngOnInit(): void {
    
  }

}
