import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  companyName: string = "kpit";
  num: number = 75;
  student: any = {
    studentId: 100,
    studentName: 'ramesh',
    studentScore: 60.6
  };
  studentNames: string[] = ["chahat", "anand", "vinay", "Prakhar", "priyanka", "sirisha", "mani", "madhav", "aayush", "atul", "abhinav"];
  name = "";
}
