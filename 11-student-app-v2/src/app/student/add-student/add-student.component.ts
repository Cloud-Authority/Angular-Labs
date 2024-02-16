import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  constructor(private service: StudentService) {

  }
  addHandler(studentForm: NgForm) {
    this.service.addStudent(studentForm.value);
    studentForm.resetForm();
  }
}
