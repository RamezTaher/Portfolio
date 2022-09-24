import React from "react"

const BackgroundCircles = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute border border-solid border-gray rounded-full h-[200px] w-[200px] mt-32 animate-ping"></div>
      <div className="absolute rounded-full border border-solid border-gray h-[300px] w-[300px] mt-32"></div>
      <div className="absolute rounded-full border border-solid border-gray h-[500px] w-[500px] mt-32"></div>
      <div className="rounded-full border border-solid border-warning opacity-20 h-[650px] w-[650px] absolute mt-32 animate-pulse"></div>
      <div className="absolute border border-solid border-gray rounded-full h-[800px] w-[800px] mt-32 "></div>
    </div>
  )
}

export default BackgroundCircles
