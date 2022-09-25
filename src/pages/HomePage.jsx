import React from "react"
import About from "../components/About"
import Hero from "../components/Hero"

const HomePage = () => {
  return (
    <main className="container sm:mx-auto px-4 ">
      <section>
        <Hero />
      </section>

      <section>
        <About />
      </section>
    </main>
  )
}

export default HomePage
