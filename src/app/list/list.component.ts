import { Component, OnInit } from '@angular/core';
import { Task } from "../models/Task"
import { Action } from "../models/Action"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // tasks: Task[] = [
  //   new Task("homework"),
  //   new Task("vacuum house"),
  //   new Task("go to the gym"),
  //   new Task("purchase groceries"),
  //   new Task("find keys")
  // ]

  tasks: Task[] = []

  async getTasks() {
    let data: any = await fetch("http://localhost:3000/tasks", {
        method: "GET",
        // mode: "no-cors",
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'  
        // }
    })
    if (!data.ok) return console.log("There's an error somewhere")
    data = await data.json()
    this.tasks = data
    console.log(this.tasks)
  }

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

  async deleteTask(index: number) {
    let mapTasks = this.tasks.filter((x, y) => {
      return (index !== y)
    })
    this.tasks = mapTasks
    console.log(`Deleted ${index}`)

    let data = await fetch(`http://localhost:3000/tasks/${6}`, {
      method: "DELETE"
    })
    console.log(data.status)
  }

  constructor() {
    this.getTasks()
    console.log(this.tasks)
  }

  ngOnInit(): void {
  }

}
