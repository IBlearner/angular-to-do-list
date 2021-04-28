import { Component, OnInit } from '@angular/core';
import { Task } from "../models/Task"
import { Action } from "../models/Action"

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

  handleEmitter(x: Action) {
    switch(x.action) {
      default:
        console.log("Action has been fallen through somehow.")
        break
      case "toggle":
        this.toggleComplete(x.index)
        break
      case "delete":
        this.deleteTask(x.index)
        break
    }
  }

  toggleComplete(index: number) {
    this.tasks.forEach((task, y) => {
      if (index === y) {
        task.completed = !task.completed
      }
    });
    console.log(`${index} is toggled`)
  }

  deleteTask(index: number) {
    let mapTasks = this.tasks.filter((x, y) => {
      return (index !== y)
    })
    this.tasks = mapTasks
    console.log(`Deleted ${index}`)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
