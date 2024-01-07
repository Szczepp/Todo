// src/app/home/home.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tasks: { text: string; completed: boolean }[] = [];
  newTask: string = '';

  constructor() { }

  ngOnInit(): void {
    // Initialize tasks if needed
  }

  addTask(): void {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ text: this.newTask.trim(), completed: false });
      this.newTask = '';
    }
  }

  markAsCompleted(index: number): void {
    this.tasks[index].completed = true;
  }

  getCompletedTasks(): { text: string; completed: boolean }[] {
    return this.tasks.filter(task => task.completed);
  }

  getUncompletedTasks(): { text: string; completed: boolean }[] {
    return this.tasks.filter(task => !task.completed);
  }
}
