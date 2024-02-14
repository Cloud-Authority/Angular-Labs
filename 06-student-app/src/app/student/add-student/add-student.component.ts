import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  student: any = {
    studentId: '',
    studentName: '',
    studentScore: ''
  }
  @Output() add = new EventEmitter();

  addHandler() {
    //alert(JSON.stringify(this.student))
    let obj = { studentId: '', studentName: '', studentScore: '' };
    obj.studentId = this.student.studentId;
    obj.studentName = this.student.studentName;
    obj.studentScore = this.student.studentScore;

    this.add.emit(obj);
    this.student = {};
  }
}
