import React from "react"
import ReactPlayer from 'react-player/vimeo'
import "./hero.scss"

const Hero = () => (
  <div className="hero-container">
    <div className="hero-video-wrapper">
      <ReactPlayer
        className="hero-video-player"
        url='https://vimeo.com/519274799'
        loop={true}
        muted={true}
        playing={true}
        controls={false}
        width='100%'
        height='100%'
      />
    </div>
    <div className="hero-content-wrapper">
      <div className="hero-content">
        <p className="tagline d3">We're a group of ding dongs</p>
      </div>
    </div>
  </div>
)

export default Hero
