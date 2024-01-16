// src/app/task/task.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'] // Make sure this line is present
})
export class TaskComponent {
  @Input() task: string = '';
  
}
