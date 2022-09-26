import React from "react"
import { motion } from "framer-motion"
import ramez from "../assets/images/ram-1.jpg"

const ExperienceCard = () => {
  return (
    <article>
      <motion.img
        src={ramez}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        alt="Company Name"
      />
    </article>
  )
}

export default ExperienceCard
