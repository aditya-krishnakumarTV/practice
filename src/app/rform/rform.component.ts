import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-react',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  userForm: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      userphone: new FormControl(null, Validators.required),
      useremail: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  constructor(private userService : UserService){}

  onSubmit() {
    console.log(this.userForm);
    this.userService.addUser(this.userForm.value)
  }
}
