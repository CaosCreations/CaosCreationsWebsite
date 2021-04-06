import React from "react"
import "./display.scss"
import se_clip from "../videos/starlightexpress.mp4"
import jj_clip from "../videos/jumpingjax.mp4"

const Display = (props) => (
    <div className="display-container" id={props.id}>
        <div className="display-video-wrapper">
            <video className="display-video" preload="auto" autoPlay={true} muted={true} loop={true} src={props.isjj === "true" ? jj_clip : se_clip} />
            {/* Need to add static images for browsers that don't load videos properly */}
            <div className="display-content">
                <p className="display-headline d4">{props.gameTitle}</p>
                <p className="display-description b1">{props.gameDescription}</p>
            </div>
        </div>
    </div>
)

export default Display