import { useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
// Sounds
import peido from "./sounds/peido.mp3"
import errou from "./sounds/errou.mp3"
// Components
import IntroRubens from "./IntroRubens"

function Quiz() {
    const navigate = useNavigate()
    const location = useLocation()
    const { difficulty, questions } = location.state || {}

    const [currentIndex, setCurrentIndex] = useState(0)
    const [randowQuestions, setRandowQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(null)

    const [progress, setProgress] = useState(0)
    const [feedback, setFeedback] = useState(null)
    const [isDisabled, setIsDisabled] = useState(false)
    const [time, setTime] = useState(null)
    const [showHint, setShowHint] = useState(false)

    const [score, setScore] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [timeElapsed, setTimeElapsed] = useState(0)

    const [showIntro, setShowIntro] = useState(false)

    const sounds = [
        peido,
        errou
    ]
    // Função para obter um som aleatório
    const getRandomSound = (soundsArray) => {
        const randomIndex = Math.floor(Math.random() * soundsArray.length)
        return soundsArray[randomIndex]
    }
    // Função para embaralhar o array
    function shuffleArray(array) {
        return [...array].sort(() => Math.random() - 0.5)
    }
    // Função para definir o tempo inicial com base na dificuldade
    function initialTime() {
        switch (difficulty) {
            case 'rubens':
                return 20
            case 'hard':
                return 25
            case 'medium':
                return 35
            default:
                return 45
        }
    }
    // Timer
    useEffect(() => {
        if (difficulty === 'rubens' && !showIntro) return
        if (time === null) return
        if (time <= 0) {
            setFeedback("⏰ Tempo esgotado!")
            setIsDisabled(true)
            setTimeout(() => navigate('/score'), 1500)
            return
        }
        const timer = setInterval(() => {
            setTime(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [time])

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeElapsed(prev => prev + 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [time])
    // Randomizar as questões
    useEffect(() => {
        // Verifica se a dificuldade e se a intro foi exibida
        if (difficulty === 'rubens' && !showIntro) return
        // Verifica se a dificuldade e as questões estão definidas
        if (!difficulty || !questions) return
        const randomized = shuffleArray(questions).map(q => ({
            ...q,
            options: shuffleArray(q.options)
        }))

        setRandowQuestions(randomized)
        setCurrentQuestion(randomized[0])
        setTime(initialTime())
    }, [difficulty, questions, showIntro])

    const playSound = (src) => {
        const audio = new Audio(src)
        audio.play()
    }
    // Progresso do quiz
    function handleAnswer(selectedOption) {
        if (isDisabled) return
        setIsDisabled(true)
        const isCorrect = selectedOption === currentQuestion.answer
        let updatedScore = score
        let updatedCorrectAnswers = correctAnswers
        let lengthQuestions = questions.length
        if (isCorrect) {
            updatedCorrectAnswers += 1
            setCorrectAnswers(updatedCorrectAnswers)
            updatedScore += 10
            setScore(updatedScore)
            setFeedback("Acertou! 🎉")
            setProgress(((currentIndex + 1) / questions.length) * 100)
            setCurrentIndex(currentIndex + 1)
            setTime(initialTime())
        } else {
            playSound(getRandomSound(sounds))
            setTime(initialTime())
            setProgress(((currentIndex + 1) / questions.length) * 100)
            setFeedback("Errou! 😢")
        }
        setTimeout(() => {
            setFeedback(null)
            setIsDisabled(false)
            setShowHint(false)

            if (currentIndex < randowQuestions.length - 1) {
                const nextIndex = currentIndex + 1
                setCurrentIndex(nextIndex)
                setCurrentQuestion(randowQuestions[nextIndex])
            } else {
                navigate("/score", {
                    state: { updatedScore, correctAnswers: updatedCorrectAnswers, time: timeElapsed, lengthQuestions, difficulty }
                })
            }
        }, 1200)
    }
    // Função para lidar com a exibição da dica
    function handleShowHint() {
        if (difficulty === 'hard') {
            setShowHint(true)
            setScore(prev => prev - 5)
        } else {
            setShowHint(true)
            setScore(prev => prev - 3)
        }
    }

    if (difficulty === 'rubens' && !showIntro) {
        return <IntroRubens handleFinish={() => setShowIntro(true)} />
    }
    // Verifica se a dificuldade, questões e pergunta atual estão definidas
    if (!difficulty || !questions || !currentQuestion || time === null) return null
    return (
        <div className={`flex items-center justify-center h-screen px-4 ${difficulty === 'rubens' ? 'bg-gradient-to-br from-[#300000] via-[#600000] to-[#1a0000]' : 'bg-[#050805]'}`}>
            <div className="w-full max-w-md">
                <div className={`flex justify-between px-6 py-3 rounded-t-lg border border-b-0
                    ${difficulty === 'rubens'
                        ? 'bg-[#3d0000] border-[#ff4c4c]'
                        : 'bg-[#172b17] border-[#c7f14f]'
                    }`}
                >
                    <h2 className="text-sm uppercase">
                        Dificuldade: <span className={`capitalize font-bold ${difficulty === 'rubens' ? 'text-[#ff4c4c]' : 'text-[#f7e94c]'}`}>{difficulty}</span>
                    </h2>
                    <p className="text-sm">
                        Tempo: <span className={`${time <= 10 ? 'text-[#ff4c4c]' : difficulty === 'rubens' ? 'text-[#ff9999]' : 'text-[#f7e94c]'}`}>{time}s</span>
                    </p>
                </div>

                <div className={`rounded-b-lg p-6 text-center border
                    ${difficulty === 'rubens'
                        ? 'border-[#ff4c4c] bg-[#3d0000]'
                        : 'border-[#c7f14f] bg-[#172b17]'
                    }`}
                >
                    <p className="text-sm mb-4">
                        Pontuação: <span className={`${difficulty === 'rubens' ? 'text-[#ff4c4c]' : 'text-[#f7e94c]'}`}>{score}</span>
                    </p>

                    <div className={`w-full h-3 rounded-full mb-6 ${difficulty === 'rubens' ? 'bg-[#4d0000]' : 'bg-[#1f2d1f]'}`}
                    >
                        <div
                            className={`${difficulty === 'rubens' ? 'bg-[#ff4c4c]' : 'bg-[#7ba64c]'} h-full transition-all duration-300`}
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <h3 className="text-base mb-6 text-white">{currentQuestion.question}</h3>

                    <ul className="space-y-3 mb-4">
                        {currentQuestion.options.map((option, i) => (
                            <li
                                key={i}
                                onClick={() => handleAnswer(option)}
                                className={`cursor-pointer font-semibold rounded px-4 py-2 text-sm transition-all duration-200
                                    ${isDisabled
                                        ? difficulty === 'rubens' ? 'bg-[#7a1d1d]' : 'bg-[#5e7840]'
                                        : difficulty === 'rubens' ? 'bg-[#d32f2f] hover:bg-[#b71c1c]' : 'bg-[#7ba64c] hover:bg-[#688c3e]'
                                    }`}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                    {difficulty !== 'rubens' && !showHint && (
                        <button
                            onClick={handleShowHint}
                            className={`${difficulty === 'rubens'
                                ? 'bg-[#ff4c4c] hover:bg-[#ff1a1a] text-white'
                                : 'bg-[#f7e94c] hover:bg-[#fff000] text-black'
                                } cursor-pointer mt-4 font-semibold text-sm px-4 py-2 rounded transition-colors duration-200`}
                        >
                            {difficulty === 'hard' ? "Mostrar dica (-5 pontos)" : "Mostrar dica (-3 pontos)"}
                        </button>
                    )}
                    {difficulty !== 'rubens' && showHint && currentQuestion.hint && (
                        <p className={`text-xs mt-2 ${difficulty === 'rubens' ? 'text-[#ff9999]' : 'text-[#f7e94c]'}`}>
                            <span className="text-white">Dica: </span>{currentQuestion.hint}
                        </p>
                    )}
                    {feedback && (
                        <p className="mt-2 text-sm text-[#f7e94c] animate-pulse">{feedback}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Quiz
