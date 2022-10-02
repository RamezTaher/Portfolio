import React from "react"
import { motion } from "framer-motion"
import ramez from "../assets/images/ram-1.jpg"

const About = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{ opacity: 1 }}
      className="min-h-screen py-10 flex flex-col text-center md:text-left relative md:flex-row items-center justify-evenly "
    >
      <h3 className="absolute top-8 uppercase tracking-[20px] text-2xl text-gray">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className=" md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 lg:w-[500px] lg:h-[600px]"
        src={ramez}
      />

      <div className="flex flex-col gap-10 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-warning/50">little</span>{" "}
          gackground
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          aspernatur sit porro dolorem accusantium, molestias quam tenetur rerum
          voluptates adipisci eius maxime? Accusamus ea commodi error neque
          aperiam impedit nesciunt. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repellat placeat tempore modi dicta provident
          praesentium deleniti. Tempora ipsam facilis cumque iure accusantium
          optio inventore officiis consectetur est animi? Eius, cupiditate.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          corporis hic nobis maxime provident numquam inventore in saepe?
          Voluptatum voluptate, quo a aut non earum consectetur adipisci quam
          veritatis sapiente. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Cupiditate temporibus adipisci omnis quisquam reprehenderit sit
          quasi commodi maxime quia molestias a at, iure ipsam minima, maiores
          ad saepe sunt facilis.
        </p>
      </div>
    </motion.div>
  )
}

export default About
