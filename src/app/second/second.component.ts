import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { User } from '../models/userModel/user';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  user: User[] = [];
  constructor(private userService: UsersService) {
    this.user = this.userService.getUser();
   }

  ngOnInit(): void {
  }

}
