import { motion } from "framer-motion"
import React from "react"

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.4, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative h-screen overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-solid  border-gray rounded-full h-[200px] w-[200px]  animate-ping"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray h-[300px] w-[300px] "></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray h-[500px] w-[500px] "></div>
      <div className="rounded-full border border-warning opacity-20 h-[650px] w-[650px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-solid border-gray rounded-full h-[800px] w-[800px]  "></div>
    </motion.div>
  )
}

export default BackgroundCircles
