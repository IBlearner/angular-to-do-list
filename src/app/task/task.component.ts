import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() index!: number
  @Input() name!: string
  @Input() completed!: boolean

  @Output() emitTaskIndex = new EventEmitter<{x: number, y: MouseEvent}>()

  
  sendTaskIndex(x: any): void {
    console.log(`sending id: ${this.index}`)
    let action = {x: this.index, y: x.target.className}
    console.log(action)
    this.emitTaskIndex.emit(action)
  }  

  constructor() {

  }

  ngOnInit(): void {
  }

}
