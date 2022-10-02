import React from "react"
import { motion } from "framer-motion"

const Technologies = () => {
  return (
    <motion.div className="min-h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:gap-0 mx-auto items-center">
      <h3 className="absolute top-8 uppercase tracking-[20px] text-2xl text-gray">
        Technologies
      </h3>
    </motion.div>
  )
}

export default Technologies
