import React from "react"
import "./navbar.scss"
import logo from "../images/brand/cc-horizontal-orange-white-cat.svg"

const Navbar = () => (
  <header className="nav-container">
     <a className="nav-logo" href="/">
       <img src={logo} alt="caos creations logo" />
       </a>
       <div className="nav-links-container">
         <a className="nav-link" href="/#jj">
           Games
         </a>
         <a className="nav-link" href="/#community">
           Community
         </a>
         <a className="btn-primary" href="https://discord.gg/U4FvsWFJvf" target="_blank" rel="noopener noreferrer">
           Join our Discord
         </a>
       </div>
  </header>
)

export default Navbar
