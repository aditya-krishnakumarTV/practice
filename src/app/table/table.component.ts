import { Component, OnInit } from '@angular/core';

import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  users: User[] = [];
  newUser: User = new User('test', 123, 'test@mail');

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUser();
    console.log(this.users);
  }

  onUpdate(i: number) {
    this.users = this.userService.getUser();
    this.users.splice(i, 1, this.newUser);
    console.log(this.users);
    
  }
}
