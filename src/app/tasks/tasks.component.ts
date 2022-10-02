import { Component, OnInit } from '@angular/core';
import { Task } from '../types/task.type';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass'],
})
export class TasksComponent implements OnInit {
  Tasks: Task[] = [];

  newTask: Task = {
    title: '',
    completed: false,
    id: 0,
  };

  constructor() {}

  ngOnInit(): void {
    let localTasks = JSON.parse(localStorage.getItem('tasks')!);
    if (localTasks) {
      this.Tasks = localTasks;
    }
  }

  addTask() {
    if (this.Tasks.length > 0)
      this.newTask.id = this.Tasks[this.Tasks.length - 1].id + 1;
    else this.newTask.id = 1;
    if (this.newTask.title != '') this.Tasks.push(this.newTask);
    this.newTask = { id: 0, title: '', completed: false };

    localStorage.setItem('tasks', JSON.stringify(this.Tasks));
  }

  taskDone(id: number) {
    this.Tasks.filter((task) => {
      if (task.id == id) {
        task.completed = !task.completed;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(this.Tasks));
  }

  delTask(id: number) {
    this.Tasks = this.Tasks.filter((task) => {
      return task.id != id;
    });
    localStorage.setItem('tasks', JSON.stringify(this.Tasks));
  }
}
