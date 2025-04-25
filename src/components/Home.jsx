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
        
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#050805] to-[#0c1c0c] text-[#c7f14f] px-4">
            <h1 className="text-6xl font-sixtyfour uppercase mb-10 tracking-widest text-[#B1E325] font-[Sixtyfour,_sans-serif]">
                    Quebra Codigo
                </h1>
            <div className="border border-[#c7f14f] bg-[#132513]/80 backdrop-blur-sm rounded-2xl w-full max-w-sm p-8 text-center shadow-lg shadow-[#c7f14f]/40">
                
                <label htmlFor="difficulty" className="block mb-2 text-3xl text-[#F7FCE9] font-['Jersey_15',_sans-serif]">
                    Escolha a dificuldade
                </label>
                <select
                    name="difficulty"
                    value={selectedDifficulty}
                    onChange={handleDifficultyChange}
                    className=" appearance-none w-full p-3 mb-8 bg-[#6A8816] border-[3px] border-[#c7f14f] text-[#F7FCE9] font-['Jersey_15',_sans-serif] text-3xl px-2 py-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c7f14f] transition-all duration-200 select-centers"
                >
                    {difficulties.map((difficulty) => (
                        <option key={difficulty.value} value={difficulty.value}>
                            {difficulty.label}
                        </option>
                    ))}
                </select>
                <button
                    onClick={handlePlay}
                    className="bg-[#6A8816] border-[3px] border-[#C0E850] rounded-md hover:bg-[#91c659] cursor-pointer active:scale-95 transition-all duration-200 text-[#F7FCE9] font-['Jersey_15',_sans-serif] text-3xl px-2 py-1 rounded-xl w-full shadow-lg"
                >
                    Jogar
                </button>
            </div>
        </div>
    )
}

export default Home