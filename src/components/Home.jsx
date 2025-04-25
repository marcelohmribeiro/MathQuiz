import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { questions } from "./Questions"

function Home() {
    const navigate = useNavigate()
    const [selectedDifficulty, setSelectedDifficulty] = useState('easy')

    // Dificuldades disponíveis
    const difficulties = [
        { value: 'easy', label: 'Fácil' },
        { value: 'medium', label: 'Médio' },
        { value: 'hard', label: 'Difícil' },
        { value: 'rubens', label: '💀Rubens💀' },
    ]

    // Função para lidar com a mudança de dificuldade
    const handleDifficultyChange = (event) => {
        setSelectedDifficulty(event.target.value)
    }

    // Função para iniciar o quiz
    function handlePlay() {
        navigate('/quiz', {
            state: {
                difficulty: selectedDifficulty,
                questions: questions[selectedDifficulty]
            }
        })
    }

    return (

        <div className={`flex flex-col items-center justify-center h-screen px-4 transition-colors duration-500
            ${selectedDifficulty === 'rubens'
              ? 'bg-gradient-to-br from-[#300000] to-[#1a0000] text-red-200'
              : 'bg-gradient-to-br from-[#050805] to-[#0c1c0c] text-[#c7f14f]'
            }`}>
            <h1
                    className={`font-[Sixtyfour,_sans-serif] !text-[#B1E325] text-5xl uppercase mb-10 tracking-widest transition-colors duration-300 
                    ${selectedDifficulty === 'rubens' ? '!text-[#ff4f4f]' : '!text-[#B1E325]'}`}
                >
                    Quebra Codigo
                </h1>
            <div
                className={`rounded-2xl w-full max-w-sm p-8 text-center shadow-lg transition-all duration-500
                    ${selectedDifficulty === 'rubens'
                        ? 'border border-red-600 bg-[#1a0000]/90 shadow-red-500/50 backdrop-blur-md text-red-100'
                        : 'border border-[#c7f14f] bg-[#132513]/80 shadow-[#c7f14f]/40 backdrop-blur-sm text-[#c7f14f]'
                    }`}
            >
                

                <label
                    htmlFor="difficulty"
                    className={`block mb-2 !text-[#F7FCE9] text-3xl font-['Jersey_15',_sans-serif] transition-colors duration-300
                    ${selectedDifficulty === 'rubens' ? '!text-[#ffcccc]' : '!text-[#F7FCE9]'}`}
                >
                    Escolha a dificuldade
                </label>
                <select
                    name="difficulty"
                    value={selectedDifficulty}
                    onChange={handleDifficultyChange}

                    className={`hover:!bg-[#C0E850] appearance-none border-[3px] !bg-[#6A8816] w-full !text-[#F7FCE9] text-3xl font-['Jersey_15',_sans-serif] px-3 py-2 p-3 mb-8 rounded-xl focus:outline-none transition-all duration-200
            ${selectedDifficulty === 'rubens'
                            ? '!bg-[#300000] hover:!bg-red-700 border border-red-500 text-red-100 focus:ring-2 focus:ring-red-600'
                            : '!bg-[#1e2b1e] hover:!bg-[#91c659]border border-[#c7f14f] text-[#f4ff9b] focus:ring-2 focus:ring-[#c7f14f]'
                        }`}

                >
                    {difficulties.map((difficulty) => (
                        <option key={difficulty.value} value={difficulty.value}>
                            {difficulty.label}
                        </option>
                    ))}
                </select>
                <button
                    onClick={handlePlay}

                    className={`hover:!bg-[#C0E850] !bg-[#6A8816] border-[3px] !text-[#F7FCE9] font-['Jersey_15',_sans-serif] cursor-pointer text-3xl px-3 py-2 rounded-xl w-full active:scale-95 transition-all duration-200
            ${selectedDifficulty === 'rubens'
                            ? '!bg-red-600 border-red-500 hover:!bg-red-700 text-white shadow-red-500/50'
                            : '!bg-[#6A8816] hover:!bg-[#91c659] border-[#C0E850] text-black shadow-[#c7f14f]/30'
                        }`}

                >
                    Jogar
                </button>
            </div>
        </div>
    )
}

export default Home