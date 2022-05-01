export interface IAnswer {
    id: number
    color: string
}

export interface ITestState {
    questions: string[]
    currentQuestion: number
    answerColors: IAnswer[]
    answers: number[]
    complete: boolean
  }