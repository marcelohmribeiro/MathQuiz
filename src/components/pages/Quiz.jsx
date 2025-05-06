import { useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
// Sounds
import peido from "../sounds/peido.mp3"
import errou from "../sounds/errou.mp3"
import palmas from "../sounds/palmas.mp3"
import relogio from "../sounds/relogio.mp3"
// Components
import IntroRubens from "../layout/IntroRubens"
import HintRubens from "../layout/HintRubens"

function Quiz() {
    const navigate = useNavigate()
    const location = useLocation()
    const { difficulty, questions } = location.state || {}

    const [currentIndex, setCurrentIndex] = useState(0)
    const [randowQuestions, setRandowQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(null)
    const [selectedOption, setSelectedOption] = useState(null);

    const [progress, setProgress] = useState(0)
    const [feedback, setFeedback] = useState(null)
    const [isDisabled, setIsDisabled] = useState(false)
    const [time, setTime] = useState(null)
    const [showHint, setShowHint] = useState(false)

    const [score, setScore] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [timeElapsed, setTimeElapsed] = useState(0)

    const [showIntro, setShowIntro] = useState(false)
    const [isSoundEnabled, setIsSoundEnabled] = useState(localStorage.getItem('sound') === 'true')

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
                return 30
            default:
                return 45
        }
    }
    // Timer
    useEffect(() => {
        if (difficulty === 'rubens' && !showIntro) return
        if (time === null) return
        if (time == 3) {
            playSound(relogio)
        }
        if (time == 0) {
            setFeedback("⏰ Tempo esgotado! ⏰")
            setIsDisabled(true)
            const lengthQuestions = questions.length
            setTimeout(() => {
                navigate('/score', {
                    state: {
                        updatedScore: score,
                        correctAnswers,
                        time: timeElapsed,
                        lengthQuestions,
                        difficulty
                    }
                })
            }, 1500)
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

    // Função para tocar o som
    const playSound = (src) => {
        if (!isSoundEnabled) return
        const audio = new Audio(src)
        audio.play()
    }

    // Função para deligar o som
    const toggleSound = () => {
        setIsSoundEnabled(prev => !prev)
        localStorage.setItem('sound', !isSoundEnabled)
    }

    // Progresso do quiz
    function handleAnswer(selectedOption) {
        if (isDisabled) return
        setSelectedOption(selectedOption)
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
            playSound(palmas)
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
            setSelectedOption(null)
            setIsDisabled(false)
            setShowHint(false)
            if (currentIndex < randowQuestions.length - 1) {
                const nextIndex = currentIndex + 1
                setCurrentIndex(nextIndex)
                setCurrentQuestion(randowQuestions[nextIndex])
            } else {
                navigate("/score", {
                    state: {
                        updatedScore,
                        correctAnswers: updatedCorrectAnswers,
                        time: timeElapsed,
                        lengthQuestions,
                        difficulty
                    }
                })
            }
        }, 1200)
    }
    // Função para lidar com a exibição da dica
    function handleShowHint() {
        if (difficulty === 'medium') {
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
        <div className={`flex items-center justify-center h-screen bg-gradient-to-br from-[#050805] to-[#0c1c0c] px-4 ${difficulty === 'rubens' ? 'bg-gradient-to-br from-[#2e0505] via-[#5a0303] to-[#120202] text-red-200' : 'bg-[#050805]'}`}>
            <div className="absolute top-4 right-4">
                <button
                    onClick={toggleSound}
                    className="bg-gray-800 !text-[#F7FCE9] px-3 py-1 rounded hover:bg-gray-700 transition"
                >
                    Som: {isSoundEnabled ? "🔈 Ligado" : "🔇 Desligado"}
                </button>
            </div>
            <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto hide-scrollbar">
                {difficulty !== 'rubens' && showHint && currentQuestion.hint && (
                    <div className="flex justify-center">
                        {<HintRubens hint={currentQuestion.hint} />}
                    </div>
                )}
                <div className={`flex justify-between items-center px-6 py-3 rounded-t-2xl border-[4px] border-b-0
                    ${difficulty === 'rubens'
                        ? 'bg-[#3d0000] border-[#ff4c4c]'
                        : 'bg-[#132513] border-[#C0E850]'
                    }`}
                >
                    <h2 className="text-2xl !text-[#F7FCE9] uppercase">
                        Dificuldade: <span className={`capitalize text-4px
                            ${difficulty === 'easy' ? 'text-[#C0E850]' :
                                difficulty === 'medium' ? 'text-[#f7e94c]' :
                                    difficulty === 'hard' ? 'text-[#F44336]' :
                                        'text-[#ff4c4c]'
                            }`}>
                            {difficulty === 'easy' ? 'Facíl' : difficulty === 'medium' ? 'Médio' : difficulty === 'hard' ? 'Difícil' : '💀Rubens💀'}
                        </span>
                    </h2>
                    <p className="text-2xl text-[#F7FCE9]">
                        Tempo: <span className={`${time <= 10 ? 'text-[#ff4c4c]' : difficulty === 'rubens' ? 'text-[#ff9999]' : 'text-[#f7e94c]'}`}>{time}s</span>
                    </p>
                </div>

                <div className={`rounded-b-2xl p-6 text-center border-[4px] border-t-0
                    ${difficulty === 'rubens'
                        ? 'border-[#ff4c4c] bg-[#3d0000]'
                        : 'border-[#c7f14f] bg-[#132513]'
                    }`}
                >
                    <p className="text-4xl text-[#F7FCE9] mb-4">
                        Pontuação: <span className={`${difficulty === 'rubens' ? 'text-[#ff4c4c]' : 'text-[#f7e94c]'}`}>{score}</span>
                    </p>

                    <div className={`w-full h-3 rounded-xl mb-6 ${difficulty === 'rubens' ? 'bg-[#4d0000]' : 'bg-[#1f2d1f]'}`}
                    >
                        <div
                            className={`${difficulty === 'rubens' ? 'bg-[#ff4c4c]' : 'bg-[#c7f14f]'} h-full transition-all duration-300`}
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <h3 className="text-3xl mb-6 !text-[#F7FCE9]">{currentQuestion.question}</h3>
                    {currentQuestion.image && (
                        <img
                            src={currentQuestion.image}
                            alt="Gráfico"
                            className="mb-6 w-full max-w-xs mx-auto rounded-lg"
                        />
                    )}
                    <ul className="space-y-3 mb-4 ">
                        {currentQuestion.options.map((option, i) => {
                            let styles = ''

                            if (isDisabled) {
                                if (time <= 0) {
                                    styles = 'bg-[#7a6f00] border-[#7a6f00]'
                                } else {
                                    if (selectedOption === option) {
                                        if (option === currentQuestion.answer) {
                                            styles = 'bg-[#6F9D26] border-[#6F9D26]' // Acertou
                                        } else {
                                            styles = 'bg-[#b94c4c] border-[#b94c4c]' // Errou
                                        }
                                    } else {
                                        // Demais opções após resposta
                                        styles = difficulty === 'rubens'
                                            ? 'bg-[#7a1d1d] border-[#7a1d1d]' // vermelho escuro
                                            : 'bg-[#4e6411] border-[#4e6411]' // verde escuro
                                    }
                                }
                            }
                            else {
                                // Antes da resposta
                                styles = difficulty === 'rubens'
                                    ? 'bg-[#b63939] hover:bg-[#b71c1c] border-[#ff4c4c]' // tema rubens
                                    : 'bg-[#6F9D26] hover:bg-[#5A801F] border-[#add14c]' // tema normal
                            }
                            return (
                                <li
                                    key={i}
                                    onClick={() => handleAnswer(option)}
                                    className={`cursor-pointer text-[#F7FCE9] text-xl border-[2px] rounded-xl px-4 py-2 transition-all duration-200 ${styles}`}
                                >
                                    {option}
                                </li>
                            )
                        })}
                    </ul>
                    {difficulty !== 'rubens' && difficulty !== 'hard' && !showHint && !isDisabled && currentQuestion.hint && (
                        <button
                            onClick={handleShowHint}
                            className={`${difficulty === 'rubens'
                                ? 'bg-[#ff4c4c] hover:bg-[#ff1a1a] text-white'
                                : 'bg-[#ffed2b] hover:bg-[#ffed2bb7] text-black'
                                } cursor-pointer mt-2 font-semibold text-[18px] px-4 py-2 rounded-lg transition-colors duration-200`}
                        >
                            {difficulty === 'medium' ? "Mostrar dica (-5 pontos)" : "Mostrar dica (-3 pontos)"}
                        </button>
                    )}
                    {feedback && (
                        <p className="mt-2 text-[#f7e94c] text-[20px] animate-pulse">{feedback}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Quiz