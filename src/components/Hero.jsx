import React from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import ramez from "../assets/images/ram-1.jpg"
import BackgroundCircles from "./BackgroundCircles"

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Words for test", "Words for test-1", "Words for test-3"],
    loop: true,
    delaySpeed: 1200,
  })
  return (
    <div className="h-screen flex flex-col gap-y-8 justify-center items-center text-center overflow-hidden  ">
      <BackgroundCircles />
      <div className="z-10">
        <img
          className="relative rounded-full h-48 w-48 mx-auto object-cover"
          src={ramez}
          alt="Ramez"
        />
        <div className=" flex flex-col items-center">
          <h2 className="text-md uppercase tracking-[15px] font-medium">
            Software Engineer
          </h2>
          <h1 className="flex items-center text-2xl font-bold ">
            <p className="text-5xl lg:text-6xl font-semibold px-6">{text}</p>
            <Cursor cursorColor="#f7abba" />
          </h1>

          <div className="pt-4">
            <a href="#about">
              <button className="btn-hero">About</button>
            </a>
            <a href="#experience">
              <button className="btn-hero">Experience</button>
            </a>
            <a href="#skills">
              <button className="btn-hero">Skills</button>
            </a>
            <a href="#projects">
              <button className="btn-hero">Projects</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
