import { useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

function Quiz() {
    const navigate = useNavigate()
    const location = useLocation()
    const { difficulty, questions } = location.state || {}

    const [currentIndex, setCurrentIndex] = useState(0)
    const currentQuestion = questions[currentIndex]

    const [progress, setProgress] = useState(0)
    const [feedback, setFeedback] = useState(null)
    const [isDisabled, setIsDisabled] = useState(false)
    const [time, setTime] = useState(0)

    // Timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => prevTime + 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    // Progresso do quiz
    function handleAnswer(selectedOption) {
        if (isDisabled) return
        setIsDisabled(true)
        const isCorrect = selectedOption === currentQuestion.answer
        if (isCorrect) {
            setFeedback("Acertou! 🎉")
            const progressBar = ((currentIndex + 1) / questions.length) * 100
            setProgress(progressBar)
            setTimeout(() => {
                setFeedback(null)
                setIsDisabled(false)
                if (currentIndex < questions.length - 1) {
                    setCurrentIndex(currentIndex + 1)
                } else {
                    alert("Você concluiu o quiz! 👏")
                    navigate('/')
                }
            }, 1000)
        } else {
            setFeedback("Errou! 😢 Voltando ao início...")
            setTimeout(() => {
                navigate('/')
            }, 1500)
        }
    }

    return (
        <div className="flex items-center justify-center h-screen px-4 bg-[#050805]">
            <div className="w-full max-w-md">
                <div className="flex justify-between bg-[#172b17] border border-b-0 border-[#c7f14f] rounded-t-lg px-6 py-3">
                    <h2 className="text-sm uppercase">
                        Dificuldade: <span className="capitalize font-bold text-[#f7e94c]">{difficulty}</span>
                    </h2>
                    <div className="text-sm">Tempo: <span className="text-[#f7e94c]">{time}s</span></div>
                </div>
                <div className="border border-[#c7f14f] bg-[#172b17] rounded-b-lg p-6 text-center">
                    <div className="w-full bg-[#1f2d1f] h-3 rounded-full mb-6">
                        <div
                            className="bg-[#7ba64c] h-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <h3 className="text-base mb-6">{currentQuestion.question}</h3>
                    <ul className="space-y-3 mb-4">
                        {currentQuestion.options.map((option, i) => (
                            <li
                                key={i}
                                onClick={() => handleAnswer(option)}
                                className={`cursor-pointer font-semibold rounded px-4 py-2 text-sm transition-all duration-200
                                    ${isDisabled ? 'bg-[#5e7840]' : 'bg-[#7ba64c] hover:bg-[#688c3e]'}`}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                    {feedback && (
                        <div className="mt-2 text-sm text-[#f7e94c] animate-pulse">
                            {feedback}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Quiz
