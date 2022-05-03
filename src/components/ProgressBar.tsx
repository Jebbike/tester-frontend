interface ProgressBarProps {
    steps: number | undefined
    currentStep: number
}

export const ProgressBar: React.FunctionComponent<ProgressBarProps> = ({ steps = 0, currentStep }) => {
    const progress = (100 * currentStep) / steps

    return (
        <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: progress + "%"}}></div>
        </div>
    )
}