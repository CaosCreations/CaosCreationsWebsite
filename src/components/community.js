import React from "react"
import "./community.scss"

const Community = () => (
    <div className="community-container" id="community">
        <div className="community-internal">
            <div className="community-content">
                <h2 className="community-headline">Join the community</h2>
                <p className="community-description b1">The Caos community has been with us from the start of our journey and our games are all the better for it.
                If you want to get involved, join our Discord and start making some noise!</p>
                <div className="community-buttons">
                    <div className="community-buttons-join">
                        <a className="btn-primary" href="https://discord.gg/U4FvsWFJvf" target="_blank" rel="noopener noreferrer">Join Discord</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Community