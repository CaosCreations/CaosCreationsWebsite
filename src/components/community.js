import React from "react"
import "./community.scss"

const Community = () => (
    <div className="community__container" id="community">
        <div className="community__internal">
            <div className="community__content">
                <h1 className="community__headline">Join the community</h1>
                <p className="community__description">The Caos community has been with us from the start of our journey and our games are all the better for it.
                If you want to get involved, join our Discord and start making some noise!</p>
                <div className="community__buttons">
                    <div classsName="community__buttons__join">
                        <a className="btn--primary" href="https://discord.gg/U4FvsWFJvf" target="_blank" rel="noopener noreferrer">Open Discord</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Community