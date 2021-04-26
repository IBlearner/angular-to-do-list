import { Component, OnInit } from '@angular/core';
import { Task } from "../models/Task"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  tasks: Task[] = [
    new Task("homework")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
