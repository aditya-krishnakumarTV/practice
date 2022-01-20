import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      phone: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    console.log(this.userForm);
  }
}
