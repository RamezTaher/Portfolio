import React from "react"

const BackgroundCircles = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-solid  border-gray rounded-full h-[150px] w-[150px]  animate-ping"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-solid border-gray h-[250px] w-[250px] "></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-solid border-gray h-[350px] w-[350px] "></div>
      <div className="rounded-full border border-solid border-warning opacity-20 h-[450px] w-[450px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-solid border-gray rounded-full h-[550px] w-[550px] "></div>
    </div>
  )
}

export default BackgroundCircles
