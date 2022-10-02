import React from "react"
import { motion } from "framer-motion"
import ramez from "../assets/images/ram-1.jpg"

const Technologie = ({ isAnimatedToLeft }) => {
  return (
    <div className="group relative cursor-pointer">
      <motion.img
        initial={{ x: isAnimatedToLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        src={ramez}
      />
    </div>
  )
}

export default Technologie
