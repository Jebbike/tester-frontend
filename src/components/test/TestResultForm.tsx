import React, { useRef, useState } from "react"

interface TestResultFormProps {
    onSubmit(email: string, shareAnswers: boolean): void
}

export const TestResultForm: React.FunctionComponent<TestResultFormProps> = ({ onSubmit }) => {
    const [share, setShare] = useState(false)
    const emailRef = useRef<HTMLInputElement>(null)

    const togleShare = () => {
        setShare(prev => !share)
    }

    return (
        <form onSubmit={() => onSubmit(emailRef.current!.value, share)}>
            <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <input 
                    id="inputEmail" 
                    className="form-control" 
                    type="email" 
                    ref={emailRef}
                    required
                />
            </div>
            <div className="mb-3 form-check">
                <input 
                    id="shareAnswerCheck" 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={share} 
                    onChange={togleShare} 
                    aria-describedby="checkHelp"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">Разрешить использовать результаты для сбора статистики</label>
                <div id="checkHelp" className="form-text">Мы анонимизируем полученные данные и будем использовать их для анализа</div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}