interface ProgressBarProps {
    steps: number
    currentStep: number
}

export const ProgressBar: React.FunctionComponent<ProgressBarProps> = ({ steps, currentStep }) => {
    const progress = (100 * currentStep) / steps

    return (
        <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: progress + "%"}}></div>
        </div>
    )
}