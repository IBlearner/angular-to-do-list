import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() index!: Number
  @Input() name!: String
  @Input() completed!: Boolean

  toggleComplete() {
    console.log(`task of id ${this.index} has been toggled`)
    this.completed = !this.completed
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
