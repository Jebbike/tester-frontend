import { IAnswer } from "../../interfaces"

interface TestAnswerProps {
    answer: IAnswer
    choseAnswerHandler(id: number): void
}

export const TestAnswer: React.FunctionComponent<TestAnswerProps> = ({ answer, choseAnswerHandler }) => (
    <button 
        className="btn answer" 
        style={{backgroundColor: `rgb(${answer.red},${answer.green},${answer.blue})`}}
        onClick={() => choseAnswerHandler(answer.id)}
    />
)