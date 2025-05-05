import { motion } from "framer-motion"
import rubens from "../img/rubens.jpeg"

function HintRubens({ hint }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 flex justify-center items-center gap-4"
        >
            <img
                src={rubens}
                alt="Rubens"
                className="w-24 h-24 object-cover rounded-full border-4 border-[#c7f14f]"
            />
            <div className="bg-white text-black text-2xl px-4 py-3 rounded-lg shadow-md max-w-xs">
                <p>{hint}</p>
            </div>
        </motion.div>
    )
}

export default HintRubens
