import React from "react"
import { motion } from "framer-motion"
import ramez from "../assets/images/ram-1.jpg"

const Technologie = ({ isAnimatedToLeft }) => {
  return (
    <div className="group cursor-pointer">
      <motion.img
        initial={{ x: isAnimatedToLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        src={ramez}
        className="rounded-full border border-gray border-solid object-cover object-center w-24 h-24 lg:h-32 lg:w-32 filter grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
      />
    </div>
  )
}

export default Technologie
