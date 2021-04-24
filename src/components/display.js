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
                autoplay={true}
                controls={false}
                width='100%'
                height='100%'
            />
            {/* Need to add static images for browsers that don't load videos properly */}
            <div className="display-content">
                <h2 className="display-headline">{props.gameTitle}</h2>
                <p className="display-description b1">{props.gameDescription}</p>
                {props.isjj === "true" &&
                    <a className="btn-primary" href={props.primaryCta} target="_blank" rel="noopener noreferrer">
                        Download on Steam
                    </a>
                }
                {props.isjj === "false" &&
                    <a className="btn-primary" href={props.primaryCta} target="_blank" rel="noopener noreferrer">
                        Check out the latest
                    </a>
                }
            </div>
        </div>
    </div>
)

export default Display