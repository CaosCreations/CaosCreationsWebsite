import React from "react"
import "./display.scss"
import sample_clip from "../videos/sample.mp4"

const Display = () => (
    <div className="display-landing__container">
        <div className="display-landing__internal">
            <video className="display-landing__media" preload="auto" autoplay="true" muted="true" loop="" src={sample_clip} />
            {/* Need to add static images for browsers that don't load videos properly */}
            <div className="display-landing__content">
                <h2 className="display-landing__headline">Jumping Jax</h2>
                <p className="display-landing__description">Exploit interesting movement mechanics to chase after your teleporting cyber-corgi and explore a sci-fi city! Use all
                the tools in your arsenal to bring Jax home before dinner.</p>
            </div>
        </div>
    </div>
)

export default Display