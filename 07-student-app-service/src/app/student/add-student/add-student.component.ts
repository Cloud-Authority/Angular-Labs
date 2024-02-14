import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  student: any = {
    studentId: '',
    studentName: '',
    studentScore: ''
  }
  service: StudentService;

  constructor(s: StudentService) { // Depedency Injection
    this.service = s;
  }
  addHandler() {
    //alert(JSON.stringify(this.student))
    let obj = { studentId: '', studentName: '', studentScore: '' };
    obj.studentId = this.student.studentId;
    obj.studentName = this.student.studentName;
    obj.studentScore = this.student.studentScore;

    this.service.addStudent(obj);
    this.student = {};
  }
}
