import React from "react"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Display from "../components/display"
import "../styles/index.scss"

const IndexPage = () => {
  return(
    <>
      <Navbar />
      <Hero />
      <Display />
    </>
  )
}

export default IndexPage