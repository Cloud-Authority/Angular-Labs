import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  onSubmit(form: NgForm) {
    console.log('value = ' + JSON.stringify(form.value))
    console.log('valid = ' + form.valid)
    console.log('touch = ' + form.touched)
  }
}
