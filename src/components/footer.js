import React from "react"
import "./footer.scss"
import logoMark from "../images/brand/cc-logomark-orange-white-cat.svg"

const Footer = (props) => (
    <div className="footer__container" id={props.id}>
        <div className="footer__internal">
            <img className="footer__logo" src={logoMark} alt="Cat laying on top of a C"/>
            <div className="footer__column">
                <h5>Games</h5>
                <ul>
                    <li>
                        <a href="/#jj">jumping jax</a>
                    </li>
                    <li>
                        <a href="/#se">starlight express</a>
                    </li>
                </ul>
            </div>
            <div className="footer__column">
                <h5>Social</h5>
                <ul>
                    <li>
                        <a href="https://discord.gg/U4FvsWFJvf" target="_blank" rel="noopener noreferrer">discord</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/CaosCreations" target="_blank" rel="noopener noreferrer">twitter</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/caos.creations/" target="_blank" rel="noopener noreferrer">instagram</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCyPThpfIOeL60-kioCGupRw" target="_blank" rel="noopener noreferrer">youtube</a>
                    </li>
                </ul>
            </div>
            {/* <div className="footer__buttons">
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
            </div> */}
        </div>
        <div className="footer__copyright">
            <p>©2021 Caos Creations, All rights reserved</p>
        </div>
    </div>
)

export default Footer