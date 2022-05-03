export interface IAnswer {
    id: number
    red: number
    green: number
    blue: number
}

export interface ITest {
    id: number
    questions: string[]
    answers: IAnswer[]
}

export interface ITestState {
    test: ITest | null

    currentQuestion: number
    answers: number[]
    complete: boolean
  }

export interface ISaveResult {
    email: string
    shareAnswers: boolean
    answers: number[]
}