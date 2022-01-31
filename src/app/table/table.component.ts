import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  users: User[] = [];
  columnsForTable = ['name' , 'phone' , 'email']

  constructor(private userService: UserService ,private router : Router) {}

  ngOnInit(): void {
    this.users = this.userService.getUser();
    console.log(this.users);
  }

  onUpdate(i: number) {
    this.router.navigate(["/table", i],)
  }

  onDelete(i : number){
    this.userService.deleteUserById(i)
  }
}
