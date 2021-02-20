import React from "react"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Display from "../components/display"
import Community from "../components/community"
import "../styles/index.scss"

const IndexPage = () => {
  return(
    <>
    <body>
        <Navbar />
        <Hero />
        <Display game__title="Jumping Jax" game__description="Exploit interesting movement mechanics to chase after your teleporting cyber-corgi and explore a sci-fi city! Use all
        the tools in your arsenal to bring Jax home before dinner."/>
        <Community />
      </body>
    </>
  )
}

export default IndexPage