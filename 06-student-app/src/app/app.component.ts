import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '06-student-app';
  students: any[] = [
    { studentId: 101, studentName: 'Amit', studentScore: 75 },
    { studentId: 102, studentName: 'Nitesh', studentScore: 85 },
    { studentId: 103, studentName: 'Raghav', studentScore: 45 },
    { studentId: 104, studentName: 'Aditi', studentScore: 59 }
  ];
  addStudent(student: any) {
    this.students.push(student);
  }
}
