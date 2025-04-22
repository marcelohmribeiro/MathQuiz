function Home() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-800 rounded-md w-[400px] h-[400px] flex flex-col items-center justify-center">
                <h1>Olá</h1>
                <button className="mt-4 bg-blue-600 rounded-sm p-2 cursor-pointer transition-all duration-300 hover:bg-blue-800">Jogar</button>
            </div>
        </div>
    )
}

export default Home