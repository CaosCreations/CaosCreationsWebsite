import React from "react"
import "./footer.scss"

const Footer = (props) => (
    <div className="footer__container" id={props.id}>
        <div className="footer__internal">
            <div className="footer__buttons">
                <a className="btn--primary" href="https://discord.gg/U4FvsWFJvf" target="_blank" rel="noopener noreferrer">Discord</a>
            </div>

            <div className="footer__buttons">
                <a className="btn--primary" href="https://twitter.com/CaosCreations" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>

            <div className="footer__buttons">
                <a className="btn--primary" href="https://www.instagram.com/caos.creations/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>

            <div className="footer__buttons">
                <a className="btn--primary" href="https://www.youtube.com/channel/UCyPThpfIOeL60-kioCGupRw" target="_blank" rel="noopener noreferrer">Youtube</a>
            </div>
        </div>
    </div>
)

export default Footer