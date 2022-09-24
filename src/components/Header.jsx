import React from "react"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"

const Header = () => {
  return (
    <header className="sticky  top-0 z-20 py-2">
      <div className="container sm:mx-auto px-4 flex items-center justify-between">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex items-center "
        >
          <SocialIcon
            url="https://www.facebook.com/Perfectbeiing/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.instagram.com/ramez__taher/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://twitter.com/jaketrent"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/ramez-taher-539bab216/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/RamezTaher"
            fgColor="gray"
            bgColor="transparent"
          />
        </motion.div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex items-center cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray">
            Contact Me
          </p>
        </motion.div>
      </div>
    </header>
  )
}

export default Header
