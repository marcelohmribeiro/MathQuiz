function IntroRubens({ handleFinish }) {
    return (
        <div className="text-white h-screen flex items-center justify-center bg-black">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">Prepare-se para o desafio <span className="font-extrabold text-red-600 text-4xl">Rubens!</span></h1>
                <p className="mb-6">Você terá apenas 20 segundos por pergunta...</p>
                <button
                    onClick={handleFinish}
                    className="bg-red-600 hover:bg-red-700 cursor-pointer text-white px-6 py-2 rounded"
                >
                    Começar!
                </button>
            </div>
        </div>
    )
}
export default IntroRubens