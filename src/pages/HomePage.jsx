import React from "react"
import About from "../components/About"
import Experiences from "../components/Experiences"
import Hero from "../components/Hero"
import Technologies from "../components/Technologies"

const HomePage = () => {
  return (
    <main className="container sm:mx-auto px-4 ">
      <section className="snap-start">
        <Hero />
      </section>
      <section id="about mt-50">
        <About />
      </section>
      <section id="experiences">
        <Experiences />
      </section>
      <section id="technologies">
        <Technologies />
      </section>
    </main>
  )
}

export default HomePage
