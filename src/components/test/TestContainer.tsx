import { useEffect, useState } from "react";
import { ISaveResult, ITest, ITestState } from "../../interfaces";
import { ProgressBar } from "../ProgressBar";
import { TestAnswer } from "./TestAnswer";
import { TestResultForm } from "./TestResultForm";


const emptyState: ITestState = {
    test: null,
    currentQuestion: 0,
    answers: [],
    complete: false
} 

export const TestContainer: React.FunctionComponent = () => {
    const [state, setState] = useState<ITestState>({} as ITestState)
 

    useEffect(() => {
        getTest().then(data => setState({
            test: data,
            currentQuestion: 0,
            answers: [],
            complete: false
        }))
    }, [])


    async function getTest(id:number = 1): Promise<ITest> {
        const response = await fetch(`http://localhost:8080/api/v1/test/${id}`, {})
    
        return response.json()
    }
    
    async function saveTestResult(data: ISaveResult, id:number = 1): Promise<void> {
        const response = await fetch(`http://localhost:8080/api/v1/test/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    
        return response.json()
     }

    const choseAnswerHandler = (id: number) => {
        const currentQuestion = state.currentQuestion + 1
        const answers = [...state.answers, id]
        const complete = currentQuestion === state.test!.questions.length

        setState(prev => ({
            test: prev.test,
            currentQuestion,
            answers,
            complete
        }))
    }

    const submitResultHandler = (email: string, shareAnswers: boolean) => {
        saveTestResult({email, shareAnswers, answers: state.answers})
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
                <ProgressBar steps={state.test?.questions.length} currentStep={state.currentQuestion} />
                <div className="answer-wrapper">
                    {
                        state.test?.answers.map(answer => {
                            return (
                                <TestAnswer key={answer.id} answer={answer} choseAnswerHandler={choseAnswerHandler}/>
                            )
                        })
                    }
                </div>
                <div className="question-wrapper mt-5 pt-5">
                    <div className="question">{state.test?.questions[state.currentQuestion]}</div>
                </div>
            </div>
        )
    }
}