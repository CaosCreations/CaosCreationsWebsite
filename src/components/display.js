import React from "react"
import "./display.scss"
import sample_clip from "../videos/sample.mp4"

const Display = (props) => (
    <div className="display__container" id={props.id}>
        <div className="display__internal">
            <video className="display__media" preload="auto" autoPlay={true} muted={true} loop={true} src={sample_clip} />
            {/* Need to add static images for browsers that don't load videos properly */}
            <div className="display__content">
                <h2 className="display__headline">{props.game__title}</h2>
                <p className="display__description">{props.game__description}</p>
            </div>
        </div>
    </div>
)

export default Display