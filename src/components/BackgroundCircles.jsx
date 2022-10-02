import { motion } from "framer-motion"
import React from "react"

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 1.4, 1.5, 1.6, 1.5, 1.4, 1],
        opacity: [0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2,
      }}
      className="absolute h-screen w-[800px] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-solid  border-gray rounded-full h-[400px] w-[400px]  animate-ping"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-solid  border-gray rounded-full h-[600px] w-[600px] "></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-solid border-gray rounded-full h-[800px] w-[800px] animate-pulse"></div>
    </motion.div>
  )
}

export default BackgroundCircles
