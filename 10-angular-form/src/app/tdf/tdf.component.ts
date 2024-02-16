import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {
  onSubmit(form: NgForm) {
    console.log('form submitted.')
    console.log('values = ' + JSON.stringify(form.value));
    console.log('touched = ' + form.touched)
    console.log('valid = ' + form.valid)
    console.log('invalid = ' + form.invalid)
  }
}
