import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('ChildComponent object is created.')
  }
  ngOnInit(): void {
    console.log('ChildComponent is loaded on browser.')
  }
  ngOnDestroy(): void {
    console.log('ChildComponet is deleted.')
  }
}
