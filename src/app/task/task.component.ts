import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() index!: Number
  @Input() name!: String
  @Input() completed!: Boolean

  @Output() emitToggleComplete = new EventEmitter<Number>()

  toggleComplete(): void{
    console.log(`task of id ${this.index} has been toggled`)
    this.emitToggleComplete.emit(this.index)
  }

  deleteTask(): void {
    console.log(`Going to delete task ${this.index}`)
    this.emitToggleComplete.emit(this.index)
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
