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
        <Display isjj="true" id="games" gameTitle="Jumping Jax" gameDescription="Exploit interesting movement mechanics to chase after your teleporting cyber-corgi and explore a sci-fi city! Use all
        the tools in your arsenal to bring Jax home before dinner." />
        <Display isjj="false" gameTitle="Starlight Express" gameDescription="Manage your interplanetary delivery company and you expand your fleet as you explore the mysteries of an old space station!"/>
        <Community />
        <Footer />
    </body>
  )
}

export default IndexPage