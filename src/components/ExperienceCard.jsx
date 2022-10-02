import React from "react"
import { motion } from "framer-motion"
import ramez from "../assets/images/ram-1.jpg"

const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center gap-y-7 flex-shrink-0 w-[300px] md:w-[400px] lg:w-[600px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={ramez}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        alt="Company Name"
      />

      <div className="px-0 md:px-10 flex flex-col gap-2">
        <h4 className="text-4xl font-light">Fullstack Developer</h4>
        <p className="font-bold text-2xl">Ramez's Company</p>
        <div className="flex items-center gap-2 ">
          <img
            src={ramez}
            alt="tech stack"
            className="h-10 w-10 rounded-full"
          />
          <img
            src={ramez}
            alt="tech stack"
            className="h-10 w-10 rounded-full"
          />
          <img
            src={ramez}
            alt="tech stack"
            className="h-10 w-10 rounded-full"
          />
          <img
            src={ramez}
            alt="tech stack"
            className="h-10 w-10 rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-gray">
          Started work ... ended work ...
        </p>

        <ul className="list-disc flex flex-col gap-4 ml-5 text-lg">
          <li className="list-disc">
            Summary points Summary points Summary points Summary points Summary
            points Summary points Summary points
          </li>
          <li className="list-disc">
            Summary points Summary points Summary points Summary points Summary
            points Summary points Summary points
          </li>
          <li className="list-disc">
            Summary points Summary points Summary points Summary points Summary
            points Summary points Summary points
          </li>
          <li className="list-disc">
            Summary points Summary points Summary points Summary points Summary
            points Summary points Summary points
          </li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
