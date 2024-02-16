import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
  students: any[] = [
    { studentId: 101, studentName: 'amit', studentScore: 75 },
    { studentId: 102, studentName: 'nItEsh', studentScore: 85 },
    { studentId: 103, studentName: 'rAGHAV', studentScore: 45 },
    { studentId: 104, studentName: 'AdITI', studentScore: 59 }
  ];
  constructor() { }

  getAllStudents() {
    return this.students;
  }
  addStudent(student: any) {
    this.students.push(student);
  }
}
