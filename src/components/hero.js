import React from "react";
import heroVideo from "../videos/cc-sphere-square.mp4";
import "./hero.scss";

const Hero = () => (
  <div className="hero-container">
    <div className="hero-video-wrapper">
      <video className="hero-video-player"
            autoplay="true"
            muted="true"
            loop="true"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h1 className="tagline">We're a group of ding dongs</h1>
          </div>
        </div>
  </div>
)

export default Hero
