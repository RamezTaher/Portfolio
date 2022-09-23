import React from "react"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div className="bg-primary text-white h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
