import { useState } from "react";
import { ITestState } from "../../interfaces";
import { ProgressBar } from "../ProgressBar";
import { TestAnswer } from "./TestAnswer";
import { TestResultForm } from "./TestResultForm";


const mockState: ITestState = {
    questions: ["вопрос 1", "вопрос 2", "вопрос 3", "вопрос 4", "вопрос 5", "blue", "purple"],
    currentQuestion: 0,
    answerColors: [
      {id:1,color:"red"}, 
      {id:2,color:"orange"}, 
      {id:3,color:"yellow"}, 
      {id:4,color:"green"}, 
      {id:5,color:"rgb(23, 118, 149)"}, 
      {id:6,color:"blue"}, 
      {id:7,color:"purple"}
    ],
    answers: [],
    complete: false
  } 

export const TestContainer: React.FunctionComponent = () => {
    const [state, dispatch] = useState<ITestState>(mockState)

    const choseAnswerHandler = (id: number) => {
        const currentQuestion = state.currentQuestion + 1
        const answers = [...state.answers, id]
        const complete = currentQuestion === state.questions.length

        dispatch(prev => ({
            questions: prev.questions,
            currentQuestion,
            answerColors: prev.answerColors,
            answers,
            complete
        }))
    }

    const submitResultHandler = (email: string, shareAnswers: boolean) => {
        console.log('email: ', email, ' , share: ', shareAnswers)
    }

    if (state.complete) {
        return (
            <div className="result-container">
                <div>
                    <p>Заполните форму и мы отправим результат Вам на почту</p>
                </div>
                <TestResultForm onSubmit={submitResultHandler} />
            </div>
        )
    } else {
        return (
            <div className="test-container">
                <ProgressBar steps={state.questions.length} currentStep={state.currentQuestion} />
                <div className="answer-wrapper">
                    {
                        state.answerColors.map(answer => {
                            return (
                                <TestAnswer key={answer.id} answer={answer} choseAnswerHandler={choseAnswerHandler}/>
                            )
                        })
                    }
                </div>
                <div className="question-wrapper mt-5 pt-5">
                    <div className="question">{state.questions[state.currentQuestion]}</div>
                </div>
            </div>
        )
    }
}