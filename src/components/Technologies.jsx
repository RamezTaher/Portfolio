import React from "react"
import { motion } from "framer-motion"
import Technologie from "./Technologie"

const Technologies = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:gap-0 mx-auto items-center"
    >
      <h3 className="absolute top-8 uppercase tracking-[20px] text-2xl text-gray">
        Technologies
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Technologie isAnimatedToLeft={true} />
        <Technologie isAnimatedToLeft={true} />
        <Technologie isAnimatedToLeft={true} />
        <Technologie isAnimatedToLeft={true} />
        <Technologie isAnimatedToLeft={false} />
        <Technologie isAnimatedToLeft={false} />
        <Technologie isAnimatedToLeft={false} />
        <Technologie isAnimatedToLeft={false} />
      </div>
    </motion.div>
  )
}

export default Technologies
