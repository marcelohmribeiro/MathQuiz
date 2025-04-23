import { useLocation, useNavigate } from "react-router-dom"

function Score() {
    const navigate = useNavigate()
    const location = useLocation()
    const { updatedScore = 0, correctAnswers = 0, time = 0, lengthQuestions = 0, difficulty } = location.state || {}

    return (
        <div className={`flex items-center justify-center h-screen px-4 
            ${difficulty === 'rubens' ? 'bg-gradient-to-br from-[#2e0505] via-[#5a0303] to-[#120202] text-red-100' : 'bg-[#080e08] text-[#c7f14f]'}`}>
            <div className={`rounded-lg w-full max-w-sm p-8 text-center shadow-md border
                    ${difficulty === 'rubens'
                    ? 'border-red-600 bg-[#1a0000]'
                    : 'border-[#c7f14f] bg-[#132513]'}`
            }>
                <h1 className="text-3xl font-bold uppercase mb-6 tracking-wider">Resultado</h1>
                <div className="flex justify-between mb-8">
                    <div>
                        <p className="text-lg font-semibold mb-2">Pontuação:</p>
                        <p className={`text-2xl font-bold 
                        ${difficulty === 'rubens' ? 'text-red-400 drop-shadow-[0_0_6px_#ff0000]' : 'text-[#7ba64c]'}`}>
                            {updatedScore}
                        </p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold mb-2">Acertos:</p>
                        <p className={`text-2xl font-bold
                            ${difficulty === 'rubens' ? 'text-red-400 drop-shadow-[0_0_6px_#ff0000]' : 'text-[#7ba64c]'}`}>
                            {`${correctAnswers}/${lengthQuestions}`}
                        </p>
                    </div>
                </div>
                <div className="flex justify-between mb-6">
                    <div>
                        <p className="text-lg font-semibold mb-2">Dificuldade:</p>
                        <p className={`uppercase 
                            ${difficulty === 'easy' ? 'text-[#4CAF50]' :
                                difficulty === 'medium' ? 'text-[#FFC107]' :
                                    difficulty === 'rubens' ? 'text-red-500 animate-pulse' :
                                        'text-[#F44336]'}`
                        }>
                            {difficulty}
                        </p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold mb-2">Tempo Total:</p>
                        <p className="text-xl font-bold text-[#f7e94c]">{time}s</p>
                    </div>
                </div>
                <button
                    onClick={() => navigate("/")}
                    className={`w-full font-semibold cursor-pointer px-6 py-2 rounded-lg transition-all duration-300 
                        ${difficulty === 'rubens'
                            ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-500/20'
                            : 'bg-[#7ba64c] hover:bg-[#91c659] text-black'}`}
                >
                    Jogar Novamente
                </button>
            </div>
        </div>
    )
}

export default Score
