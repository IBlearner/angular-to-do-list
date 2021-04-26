export class Task {
    name!: string
    completed: boolean = false
    constructor (name: string) {
        this.name = name
    }
}