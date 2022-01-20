import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-react',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  userForm: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: new FormControl(null),
      phone: new FormControl(null),
      email: new FormControl(null),
    });
  }

  onSubmit(){
    console.log(this.userForm);
  }
}
