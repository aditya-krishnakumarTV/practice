import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css'],
})
export class TemplateDrivenFormComponent {
  onSubmit(form : NgForm){
    console.log(form);
  }
}
