import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css'],
})
export class TemplateDrivenFormComponent {
  @ViewChild('f') userForm: NgForm;

  onSubmit() {
    console.log(this.userForm);
    this.userForm.reset();
  }
}
