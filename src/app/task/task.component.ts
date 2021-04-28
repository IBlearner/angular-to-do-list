import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Action } from "../models/Action"

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() index!: number
  @Input() name!: string
  @Input() completed!: boolean

  @Output() emitTaskIndex = new EventEmitter<Action>()

  //x is a MouseEvent however if it is of that type it cannot be converted to string for some reason.
  sendTaskIndex(x: any): void {
    let action = new Action(this.index, x.target.className)
    console.log(action)
    this.emitTaskIndex.emit(action)
  }  

  constructor() {

  }

  ngOnInit(): void {
  }

}
