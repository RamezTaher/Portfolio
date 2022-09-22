import React from "react"
import { SocialIcon } from "react-social-icons"

const Header = () => {
  return (
    <header>
      <div className="container sm:mx-auto px-4">
        <div className="flex items-center">
          <SocialIcon
            url="https://twitter.com/jaketrent"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://twitter.com/jaketrent"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://twitter.com/jaketrent"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://twitter.com/jaketrent"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://twitter.com/jaketrent"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
        <div className="flex items-center cursor-pointer">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray">
            Contact Me
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
