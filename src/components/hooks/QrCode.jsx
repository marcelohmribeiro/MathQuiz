import { useState } from "react"
import { IoCloseOutline } from "react-icons/io5"
import qrCode from "../img/qrcodeMath.png"

export default function QrCodeComponent({ selectedDifficulty }) {
    const [showQrCode, setShowQrCode] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const isRubens = selectedDifficulty === "rubens"

    const theme = {
        bg: isRubens ? "bg-red-900" : "bg-lime-900",
        text: isRubens ? "text-red-100" : "text-lime-100",
        border: isRubens ? "border-red-400" : "border-lime-400",
        hoverText: isRubens ? "hover:bg-red-700" : "hover:bg-lime-700",
        closeIcon: isRubens ? "text-white hover:text-red-400" : "text-white hover:text-lime-400",
        closeBtn: isRubens ? "bg-red-600" : "bg-lime-600",
        shadow: isRubens ? "shadow-red-500/40" : "shadow-lime-500/40"
    }

    return (
        <div className="relative text-center">
            <button className="mt-4">
                {showQrCode ? (
                    <div className="flex flex-col items-center">
                        <img
                            src={qrCode}
                            alt="QR Code"
                            className="w-32 h-32 mt-4 rounded-lg border-2 cursor-zoom-in transition-transform duration-300 transform hover:scale-110 shadow-lg"
                            onClick={() => setShowModal(true)}
                        />
                        <button
                            onClick={() => setShowQrCode(false)}
                            className={`mt-3 px-4 py-1 text-sm rounded-md cursor-pointer transition-all duration-200 ${theme.closeBtn} ${theme.hoverText}`}
                        >
                            Fechar QR Code
                        </button>
                    </div>
                ) : (
                    <span
                        onClick={() => setShowQrCode(true)}
                        className={`text-xl cursor-pointer transition-colors duration-200 ${theme.text}`}
                    >
                        Clique para compartilhar
                    </span>
                )}
            </button>

            {showModal && (
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className={`relative p-6 rounded-2xl border-4 transform transition-all duration-300 scale-100 animate-fade-in shadow-2xl ${theme.bg} ${theme.border} ${theme.shadow}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={qrCode}
                            alt="QR Code ampliado"
                            className="w-80 h-80 rounded-xl border-2 border-white shadow-xl transition-transform duration-300 cursor-default"
                        />
                        <button
                            onClick={() => setShowModal(false)}
                            className={`absolute -top-5 -right-5 p-2 rounded-full transition-all duration-200 ${theme.closeIcon} bg-black/80 shadow-lg cursor-pointer`}
                            title="Fechar"
                        >
                            <IoCloseOutline size={36} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
