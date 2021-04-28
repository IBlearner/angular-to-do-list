export class Action {
    //the number referring to a specified task
    index!: number
    //what to perform on the task. for example, "delete" or "toggle"
    action!: string
    constructor(index: number, action: string) {
        this.index = index
        this.action = action
    }
}