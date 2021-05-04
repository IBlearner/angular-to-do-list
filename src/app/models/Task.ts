export class Task {
    id!: number
    taskName!: string
    completed: boolean = false
    constructor (taskName: string) {
        this.taskName = taskName
    }
}