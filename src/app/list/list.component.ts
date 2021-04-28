import { Component, OnInit } from '@angular/core';
import { Task } from "../models/Task"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  tasks: Task[] = [
    new Task("homework"),
    new Task("vacuum house"),
    new Task("go to the gym"),
    new Task("purchase groceries"),
    new Task("find keys")
  ]

  printTasks() {
    console.log(this.tasks)
  }

  toggleComplete(index: Number) {
    this.tasks.forEach((task, y) => {
      if (index === y) {
        task.completed = !task.completed
      }
    });
    console.log(`${index} is toggled`)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
