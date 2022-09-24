import React from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Words for test", "Words for test-1", "Words for test-3"],
    loop: true,
    delaySpeed: 1200,
  })
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="absolute w-full">
        <BackgroundCircles />
      </div>

      <h1 className="flex items-center text-2xl font-bold">
        <p>{text}</p>
        <Cursor cursorColor="#f7abba" />
      </h1>
    </div>
  )
}

export default Hero
