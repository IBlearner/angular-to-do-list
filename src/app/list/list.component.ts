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
      // headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'  
      // }
    })
    if (!data.ok) return console.log("There's an error somewhere")
    console.log(data)

    try {
      data = await data.json()
      this.tasks = data
      console.log(this.tasks)
    } catch (err) {
      console.log(err)
    }
  }

  printTasks() {
    this.getTasks()
    console.log(this.tasks)
  }

  handleEmitter(x: Action) {
    switch(x.action) {
      default:
        console.log("Action has been fallen through somehow.")
        break
      case "toggle":
        this.toggleComplete(x.index)
        console.log("toggle has been hit")
        break
      case "delete":
        this.deleteTask(x.index)
        console.log("delete has been hit")
        break
    }
  }

  async toggleComplete(index: number) {
    let data = await fetch(`http://localhost:3000/tasks`, {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"id": index})
    })
    if (data.ok) {
      console.log(`Task with id ${index} has been toggled.`)
    } else {
      console.log("Cannot toggle this task.")
    }
  }

  async deleteTask(index: number) {
    // let mapTasks = this.tasks.filter((x, y) => {
    //   return (index !== y)
    // })
    // this.tasks = mapTasks
    // console.log(`Deleted ${index}`)`

    let data = await fetch(`http://localhost:3000/tasks`, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"id": index})
    })
    if (data.ok) {
      console.log(`Task with id ${index} has been deleted.`)
    } else {
      console.log("Cannot delete this task.")
    }
  }

  async addTask() {
    let newTask = new Task("vacuum")
    let data = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
    data = await data.json()
    console.log(data)
  }

  constructor() {
    this.getTasks()
    console.log(this.tasks)
  }

  ngOnInit(): void {
  }

}
