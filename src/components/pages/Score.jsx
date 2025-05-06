import { useLocation, useNavigate } from "react-router-dom"

function Score() {
    const navigate = useNavigate()
    const location = useLocation()
    const { updatedScore = 0, correctAnswers = 0, time = 0, lengthQuestions = 0, difficulty } = location.state || {}

    const timer = () => {
        if (time < 60) {
            return `${time}s`
        } else {
            const seconds = time % 60
            const minutes = Math.floor(time / 60)
            return `${minutes}m ${seconds}s`
        }
    }

    return (
        //estilzacao quase completa, se quiser melhorar algo, so pedir
        <div className={`flex items-center justify-center h-screen px-4 bg-gradient-to-br from-[#050805] to-[#0c1c0c]
            ${difficulty === 'rubens' ? 'bg-gradient-to-br from-[#2e0505] via-[#5a0303] to-[#120202] text-red-100' : 'bg-[#080e08] text-[#c7f14f]'}`}>
            <div className={`border-[4px] rounded-2xl w-full max-w-sm p-8 text-center font-['Jersey_15',_sans-serif] text-[#F7FCE9] shadow-md
                    ${difficulty === 'rubens'
                    ? 'border-red-600 bg-[#1a0000]'
                    : '!border-[#C0E850] bg-[#132513]'}`
            }>
                <h1 className="text-3xl text-center text-[#F7FCE9] font-bold uppercase mb-6 tracking-wider">Resultado</h1>
                <div className="grid grid-cols-2 gap-6 mb-8 font-['Jersey_15',_sans-serif] text-3xl">
                    <div>
                        <p className=" text-center text-[#F7FCE9] mb-2">Pontuação:</p>
                        <p className={`  
                        ${difficulty === 'rubens' ? 'text-red-500 drop-shadow-[0_0_6px_#ff0000]' : 'text-[#C0E850]'}`}>
                            <p>{updatedScore}</p>
                        </p>
                    </div>
                    <div>
                        <p className="text-[#F7FCE9] mb-2">Acertos:</p>
                        <p className={`
                            ${difficulty === 'rubens' ? 'text-red-500 drop-shadow-[0_0_6px_#ff0000]' : 'text-[#C0E850]'}`}>
                            <p>{`${correctAnswers}/${lengthQuestions}`}</p>
                        </p>
                    </div>
                    <div>
                        <p className="text-center text-[#F7FCE9] mb-2">Dificuldade:</p>
                        <p className=
                            {`${difficulty === 'easy' ? 'text-[#C0E850]' :
                                difficulty === 'medium' ? 'text-[#FFC107]' :
                                    difficulty === 'rubens' ? 'text-red-500 animate-pulse' :
                                        'text-[#F44336]'}`
                            }>
                            {difficulty === 'easy' ? 'Facíl' : difficulty === 'medium' ? 'Médio' : difficulty === 'hard' ? 'Difícil' : difficulty === 'rubens' ? '💀Rubens💀' : difficulty}
                        </p>
                    </div>
                    <div>
                        <p className="text-center text-[#F7FCE9] mb-2">Tempo Total:</p>
                        <p className={`  
                        ${difficulty === 'rubens' ? 'text-red-500 drop-shadow-[0_0_6px_#ff0000]' : 'text-[#C0E850]'}`}>
                            {timer()}
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => navigate("/")}
                    className={`w-full text-3xl font-['Jersey_15',_sans-serif] cursor-pointer px-6 py-2 rounded-lg transition-all duration-300 
                        ${difficulty === 'rubens'
                            //adicionei bordas, mudei a cor do botão e a cor do fundo, pfvr n tirar a prioridade da cor do texto
                            ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-500/20'
                            : 'bg-[#6A8816] border-[3px] border-[#C0E850] hover:bg-[#91c659] !text-[#F7FCE9]'}`}
                >
                    Jogar Novamente
                </button>
            </div>
        </div>
    )
}

export default Score
