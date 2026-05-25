export interface Benefits {
  title: string
  description: string
  benefits: string[]
}

export interface MultiplyItem {
  title: string
  steps: {
    step_1: string
    step_2: string
  }
}

export type Multiply = MultiplyItem[]

export interface TaskTile {
  title: string
  text: string
}

export interface Tasks {
  description: string
  tiles: TaskTile[]
}
