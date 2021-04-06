import React from "react"
import "./display.scss"
import ReactPlayer from 'react-player/youtube'

const Display = (props) => (
    <div className="display-container" id={props.id}>
        <div className="display-video-wrapper">
            <ReactPlayer
                className="display-video"
                url={props.isjj === "true" ? 'https://youtu.be/GEKaPr6blbM' : 'https://youtu.be/O6QNyA7pkpk'}
                loop={true}
                muted={true}
                playing={true}
                controls={false}
                width='100%'
                height='100%'
            />
            {/* Need to add static images for browsers that don't load videos properly */}
            <div className="display-content">
                <p className="display-headline d4">{props.gameTitle}</p>
                <p className="display-description b1">{props.gameDescription}</p>
            </div>
        </div>
    </div>
)

export default Display