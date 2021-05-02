export class Task {
    taskName!: string
    completed: boolean = false
    constructor (taskName: string) {
        this.taskName = taskName
    }
}