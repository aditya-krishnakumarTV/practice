import { User } from './../../shared/user.model';

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edittable',
  templateUrl: './edittable.component.html',
  styleUrls: ['./edittable.component.css'],
})
export class EditTableComponent implements OnInit {
  editUser: User = new User('',0,'');

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id : number = this.route.snapshot.params['id'];
    this.editUser = this.userService.getUserById(id)
    console.log(this.editUser);
  }
}
