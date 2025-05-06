import { useRef } from "react"

export function Sound(isSoundEnabled) {
    const currentAudio = useRef(null)

    const playSound = (src) => {
        if (!isSoundEnabled) return
        // Para o áudio anterior
        if (currentAudio.current) {
            currentAudio.current.pause()
            currentAudio.current.currentTime = 0
        }
        // Toca um novo áudio
        const audio = new Audio(src)
        audio.play()
        currentAudio.current = audio
    }
    // Para o áudio atual
    const stopSound = () => {
        if (currentAudio.current) {
            currentAudio.current.pause()
            currentAudio.current.currentTime = 0
            currentAudio.current = null
        }
    }

    return { playSound, stopSound }
}
