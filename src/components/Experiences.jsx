import React from "react"
import { motion } from "framer-motion"
import ExperienceCard from "./ExperienceCard"

const Experiences = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex flex-col text-left md:flex-row justify-evenly mx-auto items-center relative py-10 overflow-hidden"
    >
      <h3 className="absolute top-8 uppercase tracking-[20px] text-2xl text-gray">
        Experiences
      </h3>

      <div>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}

export default Experiences
