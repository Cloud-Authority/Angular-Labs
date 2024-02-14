import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
  students: any[] = [
    { studentId: 101, studentName: 'Amit', studentScore: 75 },
    { studentId: 102, studentName: 'Nitesh', studentScore: 85 },
    { studentId: 103, studentName: 'Raghav', studentScore: 45 },
    { studentId: 104, studentName: 'Aditi', studentScore: 59 }
  ];
  constructor() { }

  getAllStudents() {
    return this.students;
  }
  addStudent(student: any) {
    this.students.push(student);
  }
}
