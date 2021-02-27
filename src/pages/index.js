import React from "react"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Display from "../components/display"
import Community from "../components/community"
import Footer from "../components/footer"
import "../styles/index.scss"

const IndexPage = () => {
  return(
    <body>
        <Navbar />
        <Hero />
        <Display id="games" game__title="Jumping Jax" game__description="Exploit interesting movement mechanics to chase after your teleporting cyber-corgi and explore a sci-fi city! Use all
        the tools in your arsenal to bring Jax home before dinner."/>
        <Display game__title="Starlight Express" game__description="Manage your interplanetary delivery company and you expand your fleet as you explore the mysteries of an old space station!"/>
        <Community />
        <Footer />
    </body>
  )
}

export default IndexPage