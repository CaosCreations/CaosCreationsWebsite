import React from "react"
import "./display.scss"
import sample_clip from "../videos/sample.mp4"

const Display = (props) => (
    <div className="display-container" id={props.id}>
        <div className="display-video-wrapper">
            <video className="display-video" preload="auto" autoPlay={true} muted={true} loop={true} src={sample_clip} />
            {/* Need to add static images for browsers that don't load videos properly */}
            <div className="display-content">
                <h2 className="display-headline d3">{props.gameTitle}</h2>
                <p className="display-description b1">{props.gameDescription}</p>
            </div>
        </div>
    </div>
)

export default Display