import React from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import ramez from "../assets/images/ram-1.jpg"

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Words for test", "Words for test-1", "Words for test-3"],
    loop: true,
    delaySpeed: 1200,
  })
  return (
    <div className="h-screen flex flex-col gap-y-8 justify-center items-center text-center overflow-hidden">
      <div className="absolute w-full">
        <BackgroundCircles />
      </div>
      <img
        className="relative rounded-full h-48 w-48 mx-auto object-cover"
        src={ramez}
        alt="Ramez"
      />
      <div className=" flex flex-col items-center gap-2">
        <h2 className="text-md uppercase tracking-[15px] font-medium">
          Software Engineer
        </h2>
        <h1 className="flex items-center text-2xl font-bold gap-3">
          <p className="text-5xl lg:text-6xl font-semibold px-10">{text}</p>
          <Cursor cursorColor="#f7abba" />
        </h1>

        <div>
          <button className="btn-hero cursor-pointer">About</button>
          <button className="btn-hero cursor-pointer">Experience</button>
          <button className="btn-hero cursor-pointer">Skills</button>
          <button className="btn-hero cursor-pointer">Projects</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
