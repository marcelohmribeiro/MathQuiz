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
        { value: 'hard', label: 'Difícil' }
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
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#050805] to-[#0c1c0c] text-[#c7f14f] px-4">
            <div className="border border-[#c7f14f] bg-[#132513]/80 backdrop-blur-sm rounded-2xl w-full max-w-sm p-8 text-center shadow-lg shadow-[#c7f14f]/40">
                <h1 className="text-4xl font-extrabold uppercase mb-10 tracking-widest text-[#f4ff9b]">
                    Quebra Código
                </h1>
                <label htmlFor="difficulty" className="block mb-2 text-lg text-[#f4ff9b] font-medium">
                    Selecione a dificuldade
                </label>
                <select
                    name="difficulty"
                    value={selectedDifficulty}
                    onChange={handleDifficultyChange}
                    className="w-full p-3 mb-8 bg-[#1e2b1e] border border-[#c7f14f] text-[#f4ff9b] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c7f14f] transition-all duration-200"
                >
                    {difficulties.map((difficulty) => (
                        <option key={difficulty.value} value={difficulty.value}>
                            {difficulty.label}
                        </option>
                    ))}
                </select>
                <button
                    onClick={handlePlay}
                    className="bg-[#7ba64c] hover:bg-[#91c659] cursor-pointer active:scale-95 transition-all duration-200 text-black font-bold text-lg px-6 py-3 rounded-xl w-full shadow-lg"
                >
                    🎮 Jogar
                </button>
            </div>
        </div>
    )
}

export default Home