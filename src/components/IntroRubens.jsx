import { motion } from "framer-motion"

function IntroRubens({ handleFinish }) {
    return (
        <div className="relative text-white h-screen flex items-center justify-center bg-black overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-center"
            >
                <h1 className="text-3xl font-bold mb-4">
                    Prepare-se para o desafio <span className="font-extrabold text-red-600 text-4xl">Rubens!</span>
                </h1>
                <p className="mb-6">Você terá apenas 20 segundos por pergunta...</p>
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleFinish}
                    className="bg-red-600 hover:bg-red-700 cursor-pointer text-white px-6 py-2 rounded transition-all"
                >
                    Começar!
                </motion.button>
            </motion.div>
        </div>

    )
}

export default IntroRubens
